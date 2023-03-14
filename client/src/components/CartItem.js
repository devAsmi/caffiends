import {
  Box,
  HStack,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { useCartItemContext } from "../utils/GlobalState";
import { DELETE_ITEM } from "../utils/actions";

export default function CartItem({ item }) {
  const [_, dispatch] = useCartItemContext();

  function handleNumChange(e) {
    console.log("num changes", e);
  }

  function deleteItem() {
    dispatch({
      type: DELETE_ITEM,
      id: item.id,
    });
  }

  return (
    <HStack spacing="8">
      <Box w="200px">{item.name}</Box>
      <Box w="100px">{item.quantity}</Box>
      <Box w="80px">${item.price.toFixed(2)}</Box>
      <Box w="80px">{item.points}</Box>
      <IconButton
        aria-label="Search database"
        size="sm"
        colorScheme="red"
        onClick={deleteItem}
        icon={<DeleteIcon />}
      />
    </HStack>
  );
}
