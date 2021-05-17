import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/layout';
import Cards from '../components/Cards';
import { db } from '../firebase';

function order(a, b) {
  // console.log(a.description);
  return a.description.length < b.description.length
    ? -1
    : a.description.length < b.description.length
    ? 1
    : 0;
}
function Portfolio() {
  const [data, setData] = useState({});
  useEffect(() => {
    db.collection('web')
      .doc('portfolio')
      .onSnapshot(snapshot => setData(snapshot.data()));
  }, []);
  console.log(data);
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
      {/* <Flex justify="flex-end" p="2" w="100%">
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
      </Flex> */}
      <Flex
        justifyContent="space-between"
        // align="center"
        wrap="wrap"
        flexDirection={{ base: 'column', md: 'row' }}
        px={{ base: '2', md: '12' }}
        mx="2"
      >
        {data?.applications?.sort(order).map((app, index) => (
          <Cards data={app} />
        ))}
      </Flex>
    </>
  );
}

export default Portfolio;
