import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import Typical from 'react-typical';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/layout';

function Header({ data }) {
  return (
    <Flex
      justify="center"
      align="center"
      my={{ base: '14', md: '16' }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        border="20px solid white"
        boxShadow="2xl"
        rounded="full"
        height={{ base: '300px', md: '375px' }}
        width={{ base: '300px', md: '375px' }}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundColor="gray.300"
        backgroundImage={`url(${data.profilePictureLink})`}
      ></Box>
      <Box
        width={{ base: '100vw', md: '500px' }}
        ml={{ base: '0', md: '20' }}
        mt={{ base: '6', md: '0' }}
      >
        <Text
          color="#aaa"
          fontSize="16px"
          fontWeight="300"
          textAlign={{ base: 'center', md: 'left' }}
        >
          {/* <Box
          style={{ color: '#aaa' }}
          textAlign={{ base: 'center', md: 'left' }}
        > */}
          <Typical
            steps={[
              'iOS Developer 📱',
              1000,
              'Software Engineer 💻',
              1000,
              'YouTuber 🎥',
              1000,
            ]}
            loop={Infinity}
            wrapper="Text"
          />
          {/* </Box> */}
        </Text>
        <Text
          color="current"
          fontSize="48px"
          fontWeight="600"
          textAlign={{ base: 'center', md: 'left' }}
        >
          {data.firstName + ' ' + data.lastName}
        </Text>
        <Text
          color="#666"
          fontSize="14px"
          fontWeight="400"
          textAlign={{ base: 'center', md: 'left' }}
          mx={{ base: '2', md: '0' }}
        >
          {data.description}
        </Text>
        <Stack
          direction="row"
          spacing="4"
          my="4"
          justify={{ base: 'center', md: 'left' }}
        >
          <Button
            as={Link}
            colorScheme="blue"
            boxShadow="lg"
            variant="outline"
            rounded="3xl"
            isExternal
            href={data.resumeLink}
          >
            Download CV
          </Button>
          <Button
            as={ReachLink}
            to="/contact"
            colorScheme="gray"
            boxShadow="lg"
            variant="outline"
            rounded="3xl"
          >
            Contact
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Header;
