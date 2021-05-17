import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function Certification({ data }) {
  return (
    <Flex
      //   pb="5"
      //   pt="14"
      p="2"
      borderLeft="1px solid #eee"
      borderBottom="1px solid #eee"
      position="relative"
      flexDirection="column"
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
      <Text color="current" fontSize="16px" fontWeight="600">
        {data.title}
      </Text>
      <Text color="current" fontSize="14px" fontWeight="500">
        {data.issuer}
      </Text>
      <Text color="current" fontSize="14px" fontWeight="500">
        Issued: {data.issued} - {data.expiration}
      </Text>
      <Text color="#555" fontSize="13px" fontWeight="500">
        Credential ID: {data.credentialID}
      </Text>
    </Flex>
  );
}

export default Certification;
