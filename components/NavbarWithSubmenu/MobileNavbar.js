import { useQuery, gql } from '@apollo/client';

import {
  Modal,
  ModalOverlay,
  VStack,
  ModalContent,
  Input,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  Heading,
  ModalBody,
  ModalCloseButton,
  useColorModeValue as mode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  DrawerOverlay,
  DrawerContent,
  Box,
  DrawerCloseButton,
} from '@chakra-ui/react';

import Link from 'next/link';

import React, { useRef } from 'react';

import Image from 'next/image';

import { DarkModeSwitch } from './App';
import IconMenu from '../IconMenu';

const categories = gql`
  query {
    categories {
      name
      id
    }
  }
`;

function MobileNavbar(props) {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useQuery(categories);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log('GRAPHQL CATEGORIES DATA: ', data);

  return (
    <>
      <Flex>
        <Button
          m="0"
          p="0"
          // position="fixed"
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
            {/* <DrawerCloseButton /> */}
            <DrawerHeader color={mode('gray.900', 'gray.50')}>
              Menu
            </DrawerHeader>

            <DrawerBody spacing="50px">
              <VStack spacing="40px">
                <Button background="transparent">
                  <Link href="/shirts">
                    <Heading color={mode('gray.900', 'gray.50')}>
                      Shirts
                    </Heading>
                  </Link>
                </Button>
                <Button background="transparent">
                  <Link href="/hoodies">
                    <Heading color={mode('gray.900', 'gray.50')}>
                      Hoodies
                    </Heading>
                  </Link>
                </Button>
                <Button background="transparent">
                  <Link href="/hats">
                    <Heading color={mode('gray.900', 'gray.50')}>Hats</Heading>
                  </Link>
                </Button>
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

export default MobileNavbar;
