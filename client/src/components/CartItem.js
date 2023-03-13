import { Box, HStack } from "@chakra-ui/react";
import React from "react";

export default function CartItem({ item }) {
  return (
    <HStack spacing="8">
      <Box w="200px">{item.name}</Box>
      <Box w="40px">{item.quantity}</Box>
      <Box w="40px">{item.price}</Box>
      <Box w="40px">{item.points}</Box>
    </HStack>
  );
}