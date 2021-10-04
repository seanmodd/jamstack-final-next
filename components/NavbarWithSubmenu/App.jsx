import {
  Box,
  ChakraProvider,
  useColorMode,
  IconButton,
  HStack,
  ColorModeProvider,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import * as React from 'react';

import { NavContent } from './NavContent';

const App = () => (
  <Box>
    <NavContent.Mobile />
  </Box>
);
export default App;

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
        position="fixed"
        top={['10px', '16px', '16px', '16px']}
        right="-30px"
        zIndex="1"
        // backgroundColor="red.500"
        // borderWidth="4px"
        // backgroundColor={bgColor[colorMode]}
        // w="100vw"
        justify="flex-end"
      >
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          zIndex="1"
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bgColor={bgColor[colorMode]}
          marginRight="4rem"
          // bg={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};
