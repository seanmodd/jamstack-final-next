import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { Button, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import client from '../../../graphql/apolloClient';
import { GET_ALL_VARIANTS } from '../../../graphql/queries';

function VariantID({ variant }) {
  const router = useRouter();
  const { id } = router.query;
  console.log('HERE IS THE id: ', id);
  console.log('here is the id: ', variant);
  return (
    <>
      <VStack>
        <Button>
          <Link href="/variants">
            <a>Back to Variants</a>
          </Link>
        </Button>
        <Heading>Variant ID Page</Heading>
        {/* <p>Variant ID: {variantId}</p> */}

        <h1>id ending: {id}</h1>
        <h1>{variant.id}</h1>
        <h1>{variant.price}</h1>
        <h1>{variant.product.category.name}</h1>
        <h1>{variant.product.name}</h1>
        <h1>{variant.promo}</h1>
        <h1>{variant.size}</h1>
        <h1>{variant.qty}</h1>
      </VStack>
    </>
  );
}

export default VariantID;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_VARIANTS,
  });
  const { variants } = data;
  const paths = variants.map((variant) => ({
    params: { id: [variant.id] },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id[0];
  const { data } = await client.query({
    query: gql`
      query Variants($id: String!) {
        variants(where: { id: $id }) {
          id
          qty
          color
          size
          style
          price
          product {
            id
            name
            category {
              id
              name
              description
            }
            promo
            featured
            description
          }
          images {
            id
            url
            height
            width
            name
          }
        }
      }
    `,
    variables: { id },
  });
  const { variants } = data;
  const variant = variants[0];
  console.log('variants are as follows: ', variants);
  console.log('this is my variant: ', variant);

  return {
    props: { variant },
  };
}

// # characters(filter: { name: "${search}" }) {
//   # variants(filter: { name: "${search}" }) {
//     # variants(where: {product: {name_contains: "${search}"}}) {
//     # variants(where: {id: {eq: "${variantId}"}}) {
