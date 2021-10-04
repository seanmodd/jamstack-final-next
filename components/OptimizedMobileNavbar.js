import { useQuery, gql } from '@apollo/client';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import {
  VStack,
  Button,
  useColorMode,
  useDisclosure,
  Heading,
  useColorModeValue as mode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  IconButton,
  HStack,
  DrawerHeader,
  Flex,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

import Link from 'next/link';
import React, { useRef } from 'react';
import { GET_CATEGORIES } from '../graphql/queries';

import IconMenu from './IconMenu';

const categories = gql`
  query {
    categories {
      name
      id
    }
  }
`;

function OptimizedMobileNavbar() {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useQuery(categories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log('categories (from OptimizedMobileNavbar.js): ', data);

  return (
    <>
      <Flex>
        <Button
          m="0"
          p="0"
          top="-5"
          backgroundColor="transparent"
          ref={btnRef}
          onClick={onOpen}
        >
          <IconMenu />
        </Button>
        <Drawer
          zIndex="1"
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={mode('gray.50', 'gray.900')}>
            <DrawerHeader mt="25px" color={mode('gray.900', 'gray.50')}>
              Menu
            </DrawerHeader>

            <DrawerBody spacing="50px">
              <VStack mt="200px" spacing="40px">
                {data.categories.map((category) => (
                  <Button key={category.id} background="transparent">
                    <Link href="/shirts">
                      <Heading color={mode('gray.900', 'gray.50')}>
                        {category.name}
                      </Heading>
                    </Link>
                  </Button>
                ))}
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <DarkModeSwitch />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}

export default OptimizedMobileNavbar;

export const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.200',
  };
  const bgColor = {
    light: 'gray.200',
    dark: 'gray.900',
  };
  return (
    <>
      <HStack
        position="absolute"
        top={['16px', '16px', '16px', '20px']}
        right="20px"
        zIndex="999"
        justifyContent="center"
        alignItems="center"
        justify="flex-end"
      >
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          zIndex="999"
          borderWidth="4px"
          width="65px"
          borderRadius="15px"
          py="25px"
          px="25px"
          borderColor="gray.50"
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bgColor={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};
