import {
  Box,
  Center,
  chakra,
  useColorModeValue as mode,
  VStack,
  VisuallyHidden,
} from '@chakra-ui/react';
import React from 'react';

const Bar = chakra('span', {
  baseStyle: {
    display: 'block',
    pos: 'absolute',
    w: '1.25rem',
    h: '0.125rem',
    rounded: 'full',
    bg: 'currentcolor',
    mx: 'auto',
    insetStart: '0.125rem',
    transition: 'all 0.12s',
  },
});

const ToggleIcon = (props) => {
  const { active } = props;
  return (
    <>
      <VStack
        borderWidth="10px"
        borderColor={mode('gray.50', 'gray.900')}
        borderRadius="full"
      >
        <Box
          className="group"
          data-active={active ? '' : undefined}
          as="span"
          display="block"
          w="1.5rem"
          // h="1.5rem"
          pos="relative"
          aria-hidden
          pointerEvents="none"
        >
          <Bar
            // top="0.4375rem"
            _groupActive={
              {
                // top: '0.6875rem',
                // transform: 'rotate(45deg)',
              }
            }
          />
          <Bar
            // bottom="0.4375rem"
            _groupActive={
              {
                // bottom: '0.6875rem',
                // transform: 'rotate(-45deg)',
              }
            }
          />
        </Box>
        <Box
          className="group"
          data-active={active ? '' : undefined}
          as="span"
          display="block"
          w="1.5rem"
          // h="1.5rem"
          pos="relative"
          aria-hidden
          pointerEvents="none"
        >
          <Bar
            // top="0.4375rem"
            _groupActive={
              {
                // top: '0.6875rem',
                // transform: 'rotate(45deg)',
              }
            }
          />
          <Bar
            // bottom="0.4375rem"
            _groupActive={
              {
                // bottom: '0.6875rem',
                // transform: 'rotate(-45deg)',
              }
            }
          />
        </Box>
      </VStack>
    </>
  );
};

export const ToggleButton = (props) => {
  const { isOpen, onClick } = props;
  return (
    <Center
      marginStart="-6"
      px="4"
      bg={mode('gray.50', 'gray.900')}
      py="4"
      as="button"
      color="gray.400"
      _active={{
        color: 'blue.600',
      }}
      onClick={onClick}
    >
      <ToggleIcon active={isOpen} />
      <VisuallyHidden>Toggle Menu</VisuallyHidden>
    </Center>
  );
};
