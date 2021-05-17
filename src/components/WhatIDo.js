import Icon from '@chakra-ui/icon';
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function WhatIDo({ icon: DisplayIcon, index, heading, content }) {
  return (
    <Flex
      key={index}
      width={{ base: '80%', md: '45%' }}
      ml="8"
      mt="8"
      align="center"
    >
      <Icon w={12} h={12} color="blue.500" as={DisplayIcon} />

      <Text ml="4" color="#333" fontSize="16px" fontWeight="600">
        {heading}
      </Text>
    </Flex>
  );
}

export default WhatIDo;
