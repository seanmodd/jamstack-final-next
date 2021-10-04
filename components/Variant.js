import React from 'react';
import Image from 'next/image';
import {
  Heading,
  VStack,
  Text,
  Flex,
  useColorMode,
  Box,
  Input,
  Stack,
  IconButton,
  useToast,
} from '@chakra-ui/react';

const Character = ({ characters }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = {
    light: 'gray.400',
    dark: 'gray.200',
  };
  return (
    <>
      {characters.map((character) => (
        <VStack
          borderWidth="5px"
          borderRadius="5px"
          p="15px"
          key={character.id}
        >
          <Text color={color[colorMode]}>Variant ID: {character.id}</Text>
          <Heading>Product: {character.product.name}</Heading>
          <Heading color={color[colorMode]}>
            Product Category: {character.product.category.name}
          </Heading>
        </VStack>
      ))}
    </>
  );
};

export default Character;
