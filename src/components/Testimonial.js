import { Avatar } from '@chakra-ui/avatar';
import Icon from '@chakra-ui/icon';
import { Box, Text } from '@chakra-ui/layout';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';

function Testimonial({ index, data }) {
  return (
    <Box key={index} p="6" m="2" position="relative">
      <Avatar
        as={Link}
        isExternal
        href={data.profileLink}
        name={data.author}
        src={data.profileImageLink}
        position="absolute"
        size="lg"
        top="0"
        left="0"
      />
      <Box
        border="2px solid #bbb"
        borderRadius="lg"
        p="8"
        zIndex="2"
        backgroundColor="white"
      >
        <Text color="#666" fontSize="14px" fontWeight="400" fontStyle="italic">
          {data.testimonial.length > 290
            ? data.testimonial.slice(0, 290) + ' ...'
            : data.testimonial}
        </Text>
        <Flex>
          <Icon
            color="#999"
            position="absolute"
            left="8"
            opacity=".2"
            as={FaQuoteLeft}
          ></Icon>
          <Box mt="1.5">
            <Text color="#333" fontSize="12px" fontWeight="600">
              {data.author}
            </Text>
            <Text color="#bbb" fontSize="12px" fontWeight="400">
              {data.position}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Icon
        color="#999"
        h="10"
        w="10"
        position="absolute"
        zIndex="1"
        bottom="0"
        right="0"
        opacity=".2"
        as={FaQuoteRight}
      ></Icon>
    </Box>
  );
}

export default Testimonial;
