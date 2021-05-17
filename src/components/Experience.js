import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function Experience({ startYear, endYear, location, title, description }) {
  return (
    <Box
      ml="4"
      pl="6"
      pb="5"
      pt="14"
      borderLeft="1px solid #eee"
      borderBottom="1px solid #eee"
      position="relative"
    >
      <Flex
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
      </Flex>
      <Text color="current" fontSize="16px" mb="1" fontWeight="600">
        {title}
      </Text>
      <Text color="#666666" fontSize="12px" fontWeight="300">
        {description}
      </Text>
    </Box>
  );
}

export default Experience;
