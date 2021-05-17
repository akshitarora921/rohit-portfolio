import { useDisclosure } from '@chakra-ui/hooks';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Icon
        as={GiHamburgerMenu}
        h="7"
        w="7"
        color="#555"
        ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Stack shouldWrapChildren spacing="4" mt="16" ml="6">
            <NavLink
              exact={true}
              to="/"
              style={{ color: '#373F41' }}
              activeStyle={{ color: '#105EFB' }}
            >
              <Box
                mx={4}
                fontSize="xl"
                fontWeight={600}
                cursor="pointer"
                _hover={{ color: '#105EFB' }}
                onClick={onClose}
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
                fontSize="xl"
                fontWeight={600}
                cursor="pointer"
                _hover={{ color: '#105EFB' }}
                onClick={onClose}
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
                fontSize="xl"
                fontWeight={600}
                cursor="pointer"
                _hover={{ color: '#105EFB' }}
                onClick={onClose}
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
                fontSize="xl"
                fontWeight={600}
                cursor="pointer"
                _hover={{ color: '#105EFB' }}
                onClick={onClose}
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
                fontSize="xl"
                fontWeight={600}
                cursor="pointer"
                _hover={{ color: '#105EFB' }}
                onClick={onClose}
              >
                Contact
              </Box>
            </NavLink>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
