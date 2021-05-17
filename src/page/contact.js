import { Flex } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/layout';
import { AiOutlineMobile } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { MdMailOutline } from 'react-icons/md';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@chakra-ui/icon';
import { Stack } from '@chakra-ui/layout';
import CustomHeading from '../components/CustomHeading';
import { useForm } from 'react-hook-form';
// import { input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { db, storage } from '../firebase';
import firebase from 'firebase';
import ReCAPTCHA from 'react-google-recaptcha';
import { useToast } from '@chakra-ui/toast';

function Contact() {
  const [catchaVerified, setCaptchaVerified] = useState(false);
  const captcha = useRef();
  const toast = useToast();
  const [data, setData] = useState({});
  useEffect(() => {
    db.collection('web')
      .doc('contactMe')
      .onSnapshot(snapshot => setData(snapshot.data()));
  }, []);
  // useEffect(() => {
  //   db.collection('Contacts')
  //     .orderBy('timestamp', 'desc')
  //     .onSnapshot(snapshot => {
  //       snapshot.docs.map(doc => console.log(doc.id));
  //     });
  // }, []);
  var pathReference = storage
    .refFromURL('gs://rohit-portfolio-1cd90.appspot.com/data/data.json')
    .getDownloadURL()
    .then(url => {
      fetch(url)
        .then(data => data.json())
        .then(data => console.log(data));
    })
    .catch(error => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          console.log('storage/object-not-found');
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.log('storage/unauthorized');
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;

        default:
          return;
      }
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    db.collection('contacts')
      .add({
        ...data,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(data => {
        e.target.reset();
        captcha.current.reset();
        toast({
          title: 'Thank you.',
          description: 'I will get back to you.',
          status: 'success',
          duration: 5000,
          position: 'top-right',
          isClosable: true,
        });
      })
      .catch(err => console.log(err));
  };
  console.log(errors);

  return (
    <>
      <Box
        py="12"
        px={{ base: '2', md: '16' }}
        mb={{ base: '2', md: '12' }}
        backgroundColor="#fcfcfc"
        borderTop="2px solid #eee"
        borderBottom="2px solid #eee"
        position="relative"
      >
        <Text color="current" fontSize="44px" fontWeight="600">
          Contact
        </Text>
        <Text
          color="#aaa"
          fontSize="14px"
          fontWeight="300"
          position={{ base: 'relative', md: 'absolute' }}
          top={{ base: '0', md: '5' }}
          right={{ base: '0', md: '10' }}
        >
          Get in Touch
        </Text>
      </Box>
      <Flex
        align={{ base: 'flex-start', md: 'center' }}
        justify="space-between"
        px="12"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Stack flex="30%" spacing="6" my={{ base: '4', md: '0' }}>
          <Flex align="center">
            <Icon as={AiOutlineMobile} w={10} h={10} color="green.500" />
            <Text color="current" fontSize="16px" ml="5" fontWeight="600">
              {data.contactNumber}
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={GoLocation} w={10} h={10} color="green.500" />
            <Text color="current" fontSize="16px" ml="5" fontWeight="600">
              {data.location}
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={MdMailOutline} w={10} h={10} color="green.500" />
            <Text color="current" fontSize="16px" ml="5" fontWeight="600">
              {data.email}
            </Text>
          </Flex>
        </Stack>
        <Stack flex={{ base: '100%', md: '70%' }}>
          <CustomHeading title={'How can I help you?'} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex mt="8" flexDirection={{ base: 'column', md: 'row' }}>
              <Stack spacing="4" flex="50%">
                <Input
                  type="text"
                  border="2px solid #aaa"
                  placeholder="Full Name"
                  {...register('full_name', { required: true, maxLength: 80 })}
                />
                <Input
                  type="text"
                  border="2px solid #aaa"
                  placeholder="Email"
                  isInvalid={errors.Email}
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <Input
                  type="text"
                  border="2px solid #aaa"
                  placeholder="Subject"
                  {...register('subject', { required: true, maxLength: 50 })}
                />
              </Stack>
              <Textarea
                placeholder="Message"
                height="150"
                border="2px solid #aaa"
                ml={{ base: '0', md: '4' }}
                mt={{ base: '4', md: '0' }}
                {...register('message', { required: true })}
              />
            </Flex>
            <Box mt="3">
              <ReCAPTCHA
                sitekey="6LfdD80aAAAAAKEsPVobl_MVlf6dPFVa6oPAEftF"
                onChange={() => setCaptchaVerified(true)}
                ref={captcha}
              />
            </Box>

            <Button
              mt="4"
              colorScheme="teal"
              variant="outline"
              isDisabled={!catchaVerified}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Stack>
      </Flex>
    </>
  );
}

export default Contact;
