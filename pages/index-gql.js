import { Heading, VStack } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql/queries';

function IndexPage({ strapiCategories }) {
  console.log('strapiCategories (from index.js) : ', strapiCategories);
  return (
    <>
      <VStack>
        <Heading>This is the Index Page</Heading>
        
      </VStack>
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_CATEGORIES,
  });

  return {
    props: {
      strapiCategories: data.categories,
    },
  };
}
