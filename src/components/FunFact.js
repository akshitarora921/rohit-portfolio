import Icon from '@chakra-ui/icon';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

function FunFact({ index, icons, data }) {
  return (
    <Box
      key={index}
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 17px rgba(0,0,0,.32)',
      }}
      textAlign="center"
      py="6"
      px={{ base: '6', md: '16' }}
      m="4"
      border="2px solid #999"
      borderRadius="xl"
    >
      <Icon w={12} h={12} my="3" color="blue.500" as={icons[index]} />
      <Text color="#333" fontSize="16px" fontWeight="600">
        {data.title}
      </Text>
      <Text color="#d5d5d5" fontSize="48px" fontWeight="400">
        {data.value}
      </Text>
    </Box>
  );
}

export default FunFact;
