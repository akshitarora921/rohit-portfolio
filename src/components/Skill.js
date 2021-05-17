import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';

function Skill({ title, percentage }) {
  return (
    <Flex
      flex={{ base: '100%', md: '50%' }}
      p="2"
      flexDir="column"
      w="100%"
      maxW={{ base: '100vw', md: '45vw' }}
    >
      <Flex justify="space-between" align="center">
        <Text color="current" fontSize="13px" fontWeight="600">
          {title}
        </Text>
        <Text color="current" fontSize="11px" fontWeight="300">
          {percentage}%
        </Text>
      </Flex>
      <Box
        align="start"
        justifyContent="center"
        w="100%"
        // h="10px"
        border="2px solid #aaa"
        h="13px"
        p="2px"
        borderRadius="2xl"
      >
        <Box
          w={`${percentage}%`}
          h="5px"
          borderRadius="2xl"
          backgroundColor="#54ca95"
        ></Box>
      </Box>
    </Flex>
  );
}

export default Skill;
