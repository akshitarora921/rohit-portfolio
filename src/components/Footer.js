import { Link } from '@chakra-ui/layout';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

function Footer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection('socialMedia').onSnapshot(snapshot =>
      setData(snapshot.docs.map(doc => doc.data()))
    );
  }, []);
  return (
    <Box mt="6">
      <hr />
      <Flex
        justify="space-between"
        align="center"
        p={{ base: '2', md: '4' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Stack isInline spacing="4" shouldWrapChildren fontSize="12px">
          {data.map((d, index) => (
            <Link key={index} isExternal href={d.titleLink}>
              {d.title}
            </Link>
          ))}
        </Stack>
        <Box>
          <Text color="#999" fontSize="10px" mt={{ base: '2', md: '0' }}>
            © 2021 All rights reserved. rohityadav.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
