import {
  ChakraProvider,
  Heading,
  ColorModeProvider,
  useColorMode,
  VStack,
  Box,
} from '@chakra-ui/react';

function ErrorPage() {
  return (
    <MyBox>
      <ContentBox>
        <VStack>
          <Heading>Sorry buddy, this page doesn't exist... yet.</Heading>
        </VStack>
      </ContentBox>
    </MyBox>
  );
}

export default ErrorPage;

const MyBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <>
      <Box
        minH="100vh"
        px={['0px', '0px', '0px', '0px']}
        bg={bgColor[colorMode]}
      >
        {children}
      </Box>
    </>
  );
};

const ContentBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <>
      <Box pt="50px" px={['0px', '0px', '0px', '0px']} bg={bgColor[colorMode]}>
        {children}
      </Box>
    </>
  );
};
