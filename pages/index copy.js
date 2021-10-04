import { motion } from 'framer-motion';
import { Heading, VStack } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Fun from '../components/Animations/Fun';
import { GET_FEATURED, GET_FEATURED_PRODUCTS_ONLY } from '../graphql/queries';
import WaveLine from '../components/Animations/WaveLine';
import Wavify from '../components/Animations/Wavify';
import ScrollMagic from '../components/Animations/ScrollMagic';
import ScrollMagic2 from '../components/Animations/ScrollMagic2';
import Anime from '../components/Animations/Anime';
import Vanta from '../components/Animations/Vanta';

function IndexPage({ featuredProducts }) {
  console.log('featuredProducts (from index.js) : ', featuredProducts);
  return (
    <>
      <VStack>
        <Heading>Featured Products are as follows: </Heading>
        <Fun />

        {featuredProducts.map((product) => (
          <div key={product.id}>
            <Heading>{product.name}</Heading>
          </div>
        ))}
        <Vanta />
        <Anime />

        {/* <ScrollMagic /> */}
        {/* <ScrollMagic2 /> */}
        {/* <Wavify /> */}
        {/* <WaveLine /> */}
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
    query: GET_FEATURED_PRODUCTS_ONLY,
  });

  return {
    props: {
      featuredProducts: data.products,
    },
  };
}
