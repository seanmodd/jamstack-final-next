import {
  VStack,
  Button,
  Heading,
  Text,
  Link,
  useColorMode,
} from '@chakra-ui/react';

function MyItem({ itemId, itemProductName, itemProductCategoryName }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = {
    light: 'gray.400',
    dark: 'gray.200',
  };
  return (
    <>
      <VStack
        alignItems="center"
        justifyContent="center"
        borderWidth="5px"
        borderRadius="5px"
        p="15px"
        key={itemId}
      >
        <Button zIndex="1">
          <Link href={`/variants/${itemId}`}>
            <a>VIEW MORE!</a>
          </Link>
        </Button>
        <Text color={color[colorMode]}>Variant ID: {itemId}</Text>
        <Heading>Product: {itemProductName}</Heading>
        <Heading color={color[colorMode]}>
          Product Category: {itemProductCategoryName}
        </Heading>
      </VStack>
    </>
  );
}

export default MyItem;
