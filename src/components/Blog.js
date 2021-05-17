import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function Blog({ title, imageUrl, blogUrl, tags, date }) {
  return (
    <Box
      //   boxShadow="0px 1px 4px 0px rgba(0,0,0,.1)"
      transition="all .2s ease-in-out"
      rounded="2xl"
      _hover={{ transform: 'scale(1.02)' }}
      position="relative"
      overflow="none"
      m="3"
    >
      <Image
        src={imageUrl}
        w="600px"
        h="300px"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        transition="scale(1.1) .5sec ease-in-out"
        borderRadius="md"
      />
      <Text color="#aaa" fontSize="12px" fontWeight="200" ml="2" p="1">
        {date}
      </Text>
      <Text
        color="current"
        fontSize="16px"
        fontWeight="600"
        // boxShadow="xl"
        px="1"
        ml="2"
      >
        {title}
      </Text>
      <Text
        color="current"
        fontSize="13px"
        fontWeight="400"
        backgroundColor="white"
        boxShadow="xl"
        p="1"
        position="absolute"
        top="4"
        left="4"
        rounded="md"
      >
        {tags.join(', ')}
      </Text>
    </Box>
  );
}

export default Blog;
