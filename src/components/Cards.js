import { Image } from '@chakra-ui/image';
import { Link } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function Cards({ data }) {
  return (
    <Box
      as={Link}
      isExternal
      href={data.link}
      boxShadow="xl"
      position="relative"
      // m="3"
      my="3"
      w={{ base: '100%', md: '44vw' }}
      overflow="hidden"
      backgroundColor="white"
      rounded="2xl"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/personal-website-64d5d.appspot.com/o/portfolio%2F${data.imageName}?alt=media&token=01255528-7ca3-4db9-a554-f59282b13730`}
        // w="30em"
        w={{ base: '', md: '44vw' }}
        h="17em"
        objectFit="cover"
        backgroundSize="cover"
        backgroundPosition="center"
        // transition="scale(1.1) .5sec ease-in-out"
        transition="all .2s ease-in-out"
        _hover={{ transform: 'scale(1.02)' }}
      />
      <Text
        color="current"
        fontSize="16px"
        fontWeight="600"
        backgroundColor="white"
        boxShadow="xl"
        p="1"
        position="absolute"
        top="4"
        mx="4"
        rounded="md"
      >
        {data.title}
      </Text>
      <Text color="current" fontSize="13px" fontWeight="400" px="3" py="2">
        {data.description}
      </Text>
    </Box>
  );
}

export default Cards;
