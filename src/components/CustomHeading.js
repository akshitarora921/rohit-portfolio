import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React from 'react';

function CustomHeading({ title }) {
  return (
    <Box mx={{ base: '2', md: '16' }} mt="6">
      <Text color="#333" fontSize="24px" fontWeight="600">
        {title}
      </Text>
      <Box height="2px" backgroundColor="gray.300" w="100px" rounded>
        <Box width="40%" height="2px" backgroundColor="teal.300" rounded></Box>
      </Box>
    </Box>
  );
}

export default CustomHeading;
