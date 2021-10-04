import { Heading, VStack } from '@chakra-ui/react';
import client from '../graphql/apolloClient';
import Fun from '../components/Animations/Fun';
import { GET_FEATURED_PRODUCTS_ONLY } from '../graphql/queries';

import Anime from '../components/Animations/Anime';

function IndexPage({ featuredProducts }) {
  console.log('featuredProducts (from index.js) : ', featuredProducts);
  return (
    <>
      <VStack>
        <Heading>Featured Products are as follows: </Heading>
        {featuredProducts.map((product) => (
          <div key={product.id}>
            <Heading>{product.name}</Heading>
          </div>
        ))}
        <Anime />
      </VStack>
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_FEATURED_PRODUCTS_ONLY,
  });

  return {
    props: {
      featuredProducts: data.products,
    },
  };
}
