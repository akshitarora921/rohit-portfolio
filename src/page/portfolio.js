import React, { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/layout';
import Cards from '../components/Cards';

function Portfolio({ title = 'Aksihtr', tags = 'asjfasdf' }) {
  const [activeTag, setActiceTag] = useState('');
  return (
    <>
      <Box
        py="12"
        px={{ base: '2', md: '16' }}
        mb="4"
        backgroundColor="#fcfcfc"
        borderTop="2px solid #eee"
        borderBottom="2px solid #eee"
        position="relative"
      >
        <Text color="current" fontSize="44px" fontWeight="600">
          Portfolio
        </Text>
      </Box>
      <Flex justify="flex-end" p="2" w="100%">
        <Text color="current" fontSize="12px" fontWeight="300" px="3">
          ios
        </Text>
        <Text color="current" fontSize="12px" fontWeight="300" px="3">
          Swift
        </Text>
        <Text color="current" fontSize="12px" fontWeight="300" px="3">
          Design
        </Text>
        <Text color="current" fontSize="12px" fontWeight="300" px="3">
          game
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        align="center"
        wrap="wrap"
        px={{ base: '2', md: '12' }}
      >
        <Cards
          title="Project 1"
          imageUrl="https://picsum.photos/200/200"
          tags={['ios', 'design']}
        />
        <Cards
          title="Project 1"
          imageUrl="https://picsum.photos/200/200"
          tags={['ios', 'design']}
        />
        <Cards
          title="Project 1"
          imageUrl="https://picsum.photos/200/200"
          tags={['ios', 'design']}
        />
        <Cards
          title="Project 1"
          imageUrl="https://picsum.photos/200/200"
          tags={['ios', 'design']}
        />
      </Flex>
    </>
  );
}

export default Portfolio;
