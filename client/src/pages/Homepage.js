import React from "react";
import { Image, Wrap, Box, Flex, Text, Heading } from "@chakra-ui/react";
export default function Homepage() {
  return (
    <Flex
      bgGradient='linear(to-r, teal.200, teal.400)'
      direction="column"
      gap="2"
      justifyContent="center"
      alignItems="center"
      flexGrow="1"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="row"
        gap="4"
        wrap="wrap"
      >
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80"
          alt="Coffee"
        />
        ,
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://images.unsplash.com/photo-1585445490387-f47934b73b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Bagel"
        />
        ,
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://images.unsplash.com/photo-1530373239216-42518e6b4063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Ice tea"
        />
        ,
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://images.unsplash.com/photo-1627754468549-6ed1a4813a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80"
          alt="Sandwiches"
        />
      </Flex>
      <Heading size="4xl">Caffiends</Heading>
      <Text fontSize="2xl">At your service for your caffiene needs!</Text>
    </Flex>
  );
}
