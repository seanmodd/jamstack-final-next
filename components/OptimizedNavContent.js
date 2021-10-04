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

import { Logo } from './Logo';
import OptimizedMobileNavbar from './OptimizedMobileNavbar';
import IconAnimations from './Animations/IconAnimations';

function NavContent(props) {
  console.log('props (from OptimizedNavContent.js): ', props);
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
                <OptimizedMobileNavbar />
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
                  <IconAnimations>
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
                        top="0"
                        mt="0"
                        _hover={{ background: 'transparent' }}
                        _active={{ background: 'transparent' }}
                        _focus={{ borderWidth: '0px' }}
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
                  </IconAnimations>
                  <IconAnimations>
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
                        top="0"
                        mt="0"
                        _hover={{ background: 'transparent' }}
                        _active={{ background: 'transparent' }}
                        _focus={{ borderWidth: '0px' }}
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
                  </IconAnimations>
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
            <Link href="/products">
              <Button
                background="transparent"
                color={mode('gray.900', 'gray.50')}
              >
                <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                  VIEW ALL
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
            <Link href="/characters">
              <Button
                background="transparent"
                color={mode('gray.900', 'gray.50')}
              >
                <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                  CHARACTERS
                </Heading>
              </Button>
            </Link>
            <Link href="/variants">
              <Button
                background="transparent"
                color={mode('gray.900', 'gray.50')}
              >
                <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                  VARIANTS
                </Heading>
              </Button>
            </Link>
            {/* </HStack> */}
          </HStack>
        </VStack>
      </Flex>
    </>
  );
}

export default NavContent;
