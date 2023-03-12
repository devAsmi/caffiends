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

export default function MenuItem({ item }) {
  return (
    <Card maxW="md" size={"md"}>
      <CardBody>
        <Image
          objectFit="contain"
          boxSize="300px"
          src={item.image}
          alt={`${item.name}-image`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
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
        <Button variant="outline" colorScheme="blue">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
