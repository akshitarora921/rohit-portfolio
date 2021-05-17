import { Flex } from '@chakra-ui/layout';
import { GoPrimitiveDot } from 'react-icons/go';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import Icon from '@chakra-ui/icon';

function Impact({ title }) {
  return (
    <Flex
      //   pb="5"
      //   pt="14"
      p="2"
      borderLeft="1px solid #eee"
      borderBottom="1px solid #eee"
      position="relative"
      align="center"
    >
      {/* <Flex
        align="center"
        position="absolute"
        left="-7"
        backgroundColor="white"
        top="4"
        w="100%"
      >
        <Flex px="2" rounded="full" border="2px solid green">
          {startYear}
          <Text ml="1" display={endYear ? 'block' : 'none'}>
            {' '}
            - {endYear}
          </Text>
        </Flex>
        <Text color="current" ml="3" fontSize="13px" fontWeight="300">
          {location}
        </Text>
      </Flex> */}
      <Icon as={GoPrimitiveDot} h="6" w="6" color="blue.500" />
      <Text
        color="current"
        fontSize={{ base: '14px', md: '16px' }}
        ml="2"
        fontWeight="500"
      >
        {title}
      </Text>
      {/* <Text color="#666666" fontSize="12px" fontWeight="300">
        {description}
      </Text> */}
    </Flex>
  );
}

export default Impact;
