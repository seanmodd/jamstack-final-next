import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Icon,
  Heading,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import Link from 'next/link';

import { CgProfile } from 'react-icons/cg';
import { FaSearchengin } from 'react-icons/fa';

import * as React from 'react';

import { Logo } from '../Logo';
import MobileNavbar from './MobileNavbar';
import { links } from './_data';

const MobileNavContext = (props) => {
  console.log('This is props from NavContent.js : ', props);
  return (
    <>
      <Flex minW="100vw" bg={mode('gray.50', 'gray.900')}>
        <VStack>
          <HStack>
            <Flex
              align="center"
              // justify="space-between"
              color={mode('gray.900', 'gray.50')}
              // justifyContent="space-between"
              minW={['90vw', '95vw', '95vw', '95vw']}
              bg={mode('gray.50', 'gray.900')}
              {...props}
            >
              <Box ml={['20px', '20px', '100px', '150px']} mt="50px">
                <MobileNavbar />
              </Box>
              <Box
                as="a"
                pl={['20px', '20px', '20px', '20px']}
                pr={['-20px', '-20px', '-20px', '-20px']}
                rel="home"
                textDecoration="none"
                mx="auto"
              >
                <Logo h="24px" iconColor="blue.400" />
              </Box>
              <Box>
                <HStack>
                  <Link
                    display={{
                      base: 'none',
                      md: 'fixed',
                      lg: 'fixed',
                    }}
                    href="/auth/login"
                  >
                    <Button
                      display={{
                        base: 'fixed',
                        md: 'fixed',
                        lg: 'fixed',
                      }}
                      mt="0"
                      _hover={{ background: 'transparent' }}
                      background="transparent"
                    >
                      <Icon
                        display={{
                          base: 'fixed',
                          md: 'fixed',
                          lg: 'fixed',
                        }}
                        mt="0"
                        width="50px"
                        height="50px"
                        color="#8344ff"
                        as={FaSearchengin}
                      />
                    </Button>
                  </Link>
                  <Link
                    display={{
                      base: 'none',
                      md: 'fixed',
                      lg: 'fixed',
                    }}
                    href="/auth/login"
                  >
                    <Button
                      display={{
                        base: 'none',
                        md: 'fixed',
                        lg: 'fixed',
                      }}
                      top="-2"
                      mt="0"
                      _hover={{ background: 'transparent' }}
                      background="transparent"
                    >
                      <Icon
                        display={{
                          base: 'fixed',
                          md: 'fixed',
                          lg: 'fixed',
                        }}
                        mt="0"
                        width="50px"
                        height="50px"
                        color="#8344ff"
                        as={CgProfile}
                      />
                    </Button>
                  </Link>
                </HStack>
              </Box>
            </Flex>
          </HStack>

          <HStack
            w="100vw"
            px={['20%', '20%', '30%', '35%']}
            justifyContent="space-around"
          >
            {/* <HStack spacing="50px" mx="0px"> */}
            <Link href="/about">
              <Button
                color={mode('gray.900', 'gray.50')}
                background="transparent"
              >
                <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                  ABOUT
                </Heading>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                background="transparent"
                color={mode('gray.900', 'gray.50')}
              >
                <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                  CONTACT
                </Heading>
              </Button>
            </Link>
            {/* </HStack> */}
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
};
