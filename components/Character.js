import React from 'react';
import Image from 'next/image';
import { Heading, VStack, Text, Flex } from '@chakra-ui/react';

const Character = ({ characters }) => (
  <>
    {characters.map((character) => (
      <VStack key={character.id}>
        <Image src={character.image} width={300} height={300} />
        <Heading as="h4" align="center" size="md">
          {character.name}
        </Heading>
        <Text align="center">Origin: {character.origin.name}</Text>
        <Text align="center">Location: {character.location.name}</Text>
      </VStack>
    ))}
  </>
);

export default Character;
