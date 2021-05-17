import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function Experience({
  startYear,
  endYear,
  company,
  location,
  title,
  description,
}) {
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
      </Flex>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Text
          color="current"
          fontSize={{ base: '14px', md: '16px' }}
          mb="1"
          fontWeight="600"
        >
          {title}
        </Text>
        <Text display={{ base: 'none', md: 'block' }}>{',\xa0'}</Text>
        {company && (
          <Text
            color="current"
            fontSize={{ base: '13px', md: '16px' }}
            mb="1"
            fontWeight="300"
          >
            {company}
          </Text>
        )}
      </Flex>
      <Text color="current" fontSize="13px" fontWeight="300">
        {location}
      </Text>
      <Text color="#666666" fontSize="12px" fontWeight="300">
        {description}
      </Text>
    </Box>
  );
}

export default Experience;
