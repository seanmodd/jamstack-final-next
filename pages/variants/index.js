import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useState } from 'react';
import {
  Heading,
  useColorMode,
  Text,
  Box,
  Input,
  Stack,
  Grid,
  GridItem,
  IconButton,
  Flex,
  useToast,
  VStack,
  Button,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import Variant from '../../components/Variant';
import client from '../../graphql/apolloClient';
import Fun from '../../components/Animations/Fun';
import { GET_ALL_VARIANTS } from '../../graphql/queries';
import Anime from '../../components/Animations/Anime';
import MyItem from '../../components/MyItem';

// function IndexPage({ AllVariants }) {
// function IndexPage({ AllVariants, results }) {
function IndexPage(results) {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = {
    light: 'gray.400',
    dark: 'gray.200',
  };

  //! from rick and morty
  const intialState = results;
  console.log(
    '🚀 ~ file: index.js ~ line 38 ~ IndexPage ~ intialState',
    intialState
  );
  const [search, setSearch] = useState('');
  console.log('🚀 ~ file: index.js ~ line 43 ~ IndexPage ~ search', search);
  const [items, setItems] = useState(intialState.items);
  console.log('🚀 ~ file: index.js ~ line 44 ~ IndexPage ~ items', items);
  const toast = useToast();
  //! above from rick and morty

  return (
    <>
      <VStack>
        <Heading>All variants are as follows: </Heading>
        //! below is from rick and morty
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const results = await fetch('/api/SearchVariants', {
              method: 'post',
              body: search,
            });
            const { items, error } = await results.json();
            if (error) {
              toast({
                position: 'bottom',
                title: 'An error occurred.',
                description: error,
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            } else {
              setItems(items);
            }
          }}
        >
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input
              placeholder="Search"
              textColor="black"
              zIndex="9999"
              color={color[colorMode]}
              value={search}
              boxShadow="base"
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              disabled={search === ''}
              type="submit"
            />
            <IconButton
              colorScheme="red"
              aria-label="Reset "
              icon={<CloseIcon />}
              disabled={search === ''}
              onClick={async () => {
                setSearch('');
                setItems(intialState.items);
              }}
            />
          </Stack>
        </form>
        //! above is from rick and morty
        {/* <Variant items={items} /> */}
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(8, 1fr)',
            'repeat(8, 1fr)',
            'repeat(8, 1fr)',
          ]}
          justifyContent="center"
          alignItems="center"
          // bg="red"
          px="100px"
          gap={4}
        >
          {items.map((item) => {
            console.log(
              '🚀 ~ file: index.js ~ line 138 ~ IndexPage ~ items',
              items
            );
            return (
              <GridItem
                alignItems="center"
                justifyContent="center"
                // colSpan={[5, 4, 4, 2]}
                colSpan={[5, 4, 4, 4, 2]}
              >
                <MyItem
                  alignItems="center"
                  justifyContent="center"
                  itemId={item.id}
                  itemProductName={item.product.name}
                  itemProductCategoryName={item.product.category.name}
                />
              </GridItem>
            );
          })}
        </Grid>
        <Anime />
      </VStack>
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_VARIANTS,
  });

  return {
    props: {
      items: data.variants,
    },
  };
}
