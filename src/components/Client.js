import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function Client({ index, data }) {
  return (
    <Flex
      key={index}
      position="relative"
      h="150px"
      align="center"
      justify="center"
      textAlign="center"
    >
      {/* <Link> */}
      <Image
        src={data.imageLink}
        filter="grayscale(90%)"
        my="auto"
        maxW="150px"
      />
      {/* </Link> */}
    </Flex>
  );
}

export default Client;
