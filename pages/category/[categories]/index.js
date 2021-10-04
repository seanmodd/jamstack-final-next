import { Text, Heading, VStack } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

function IndexPage({ strapiCategories }) {
  console.log(
    'categories data (from [categories] index.js) : ',
    strapiCategories
  );
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
    query: gql`
      query {
        categories {
          name
          id
        }
      }
    `,
  });

  return {
    props: {
      strapiCategories: data.categories,
    },
  };
}
