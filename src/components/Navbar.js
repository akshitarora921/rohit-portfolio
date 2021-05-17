import { Avatar } from '@chakra-ui/avatar';
import { Stack, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Link as ReachLink, NavLink } from 'react-router-dom';
import React from 'react';
import { Box } from '@chakra-ui/layout';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <Flex
      p={{ base: '3', md: '10' }}
      boxShadow={{ base: 'md', md: 'none' }}
      justify="space-between"
      align="center"
    >
      <Flex align="center" as={ReachLink} exact={true} to="/">
        <Avatar name="Rohit" />
        <Text ml="3">Rohit Yadav</Text>
      </Flex>
      <MobileNav />

      {/* <Button colorScheme="teal">Open</Button> */}
      <Stack
        shouldWrapChildren
        isInline
        spacing="4"
        display={{ base: 'none', md: 'block' }}
      >
        <NavLink
          exact={true}
          to="/"
          style={{ color: '#373F41' }}
          activeStyle={{ color: '#105EFB' }}
        >
          <Box
            mx={4}
            fontSize="sm"
            fontWeight={400}
            cursor="pointer"
            _hover={{ color: '#105EFB' }}
          >
            About Me
          </Box>
        </NavLink>

        <NavLink
          exact={true}
          to="/resume"
          style={{ color: '#373F41' }}
          activeStyle={{ color: '#105EFB' }}
        >
          <Box
            as={Text}
            mx={4}
            fontSize="sm"
            fontWeight={400}
            cursor="pointer"
            _hover={{ color: '#105EFB' }}
          >
            Resume
          </Box>
        </NavLink>

        <NavLink
          exact={true}
          to="/portfolio"
          style={{ color: '#373F41' }}
          activeStyle={{ color: '#105EFB' }}
        >
          <Box
            as={Text}
            mx={4}
            fontSize="sm"
            fontWeight={400}
            cursor="pointer"
            _hover={{ color: '#105EFB' }}
          >
            Portfolio
          </Box>
        </NavLink>

        <NavLink
          exact={true}
          to="/blog"
          style={{ color: '#373F41' }}
          activeStyle={{ color: '#105EFB' }}
        >
          <Box
            as={Text}
            mx={4}
            fontSize="sm"
            fontWeight={400}
            cursor="pointer"
            _hover={{ color: '#105EFB' }}
          >
            Blog
          </Box>
        </NavLink>
        <NavLink
          exact={true}
          to="/contact"
          style={{ color: '#373F41' }}
          activeStyle={{ color: '#105EFB' }}
        >
          <Box
            as={Text}
            mx={4}
            fontSize="sm"
            fontWeight={400}
            cursor="pointer"
            _hover={{ color: '#105EFB' }}
          >
            Contact
          </Box>
        </NavLink>
      </Stack>
    </Flex>
  );
}

export default Navbar;
