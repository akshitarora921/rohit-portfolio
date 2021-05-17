import Icon from '@chakra-ui/icon';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/layout';
import React from 'react';

function WhatIDo({ icon: DisplayIcon, index, heading, content }) {
  return (
    <Stack
      key={index}
      isInline
      spacing="4"
      width={{ base: '80%', md: '45%' }}
      ml="8"
      mt="8"
    >
      <Icon w={12} h={12} color="blue.500" as={DisplayIcon} />
      <Box>
        <Text color="#333" fontSize="16px" fontWeight="600">
          {heading}
        </Text>
        <Text color="#666" fontSize="12px" fontWeight="400">
          {content}
        </Text>
      </Box>
    </Stack>
  );
}

export default WhatIDo;
