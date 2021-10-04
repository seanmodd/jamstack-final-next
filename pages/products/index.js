import { Box, Heading, VStack } from '@chakra-ui/layout';
import client from '../../graphql/apolloClient';

import { GET_ALL_PRODUCTS } from '../../graphql/queries';

const myvariantproducts = [];
function ProductsPage({ allProducts }) {
  console.log('allProducts (from  products folder index.js) ', allProducts);
  const VariantProducts = allProducts.map((product) => {
    if (product.variants.length > 0 && product.variants.length !== undefined) {
      return (
        <Box key={product.id}>
          <Heading>{product.title}</Heading>
          <p>{product.description}</p>
        </Box>
      );
    }
  });
  console.log('VariantProducts ', VariantProducts);

  VariantProducts.map((product) => {
    if (product !== undefined) {
      myvariantproducts.push(product);
    }
  });
  console.log('myvariantproducts ', myvariantproducts);
  return (
    <>
      <VStack>
        <Heading>All Vehicles</Heading>
        {allProducts.map((product) => (
          <Box key={product.id}>
            <Heading>{product.name}</Heading>
            <Heading>{product.variants.id}</Heading>
          </Box>
        ))}
      </VStack>
    </>
  );
}

export default ProductsPage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
  });

  return {
    props: {
      allProducts: data.products,
    },
  };
}
