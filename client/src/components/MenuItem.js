import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Button,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useCartItemContext } from "../utils/GlobalState";
import { ADD_ITEM } from "../utils/actions";

export default function MenuItem({ item }) {
  const [_, dispatch] = useCartItemContext();

  const addItemToCart = () => {
    dispatch({
      type: ADD_ITEM,
      item: item,
    });
  };

  return (
    <Card maxW="sm" size={"sm"}>
      <CardBody>
        <Image
          objectFit="fill"
          boxSize="300px"
          src={item.image}
          alt={`${item.name}-image`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3" width="300px">
          <Heading size="md">{item.name}</Heading>
          <Text>{item.description}</Text>
          <Flex justifyContent="space-between" alignItems="center" gap="2">
            <Text color="blue.400" fontSize="xl">
              Points: {item.points}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${item.price}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="outline" colorScheme="blue" onClick={addItemToCart}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
