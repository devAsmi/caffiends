import { Box, HStack, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { useCartItemContext } from "../utils/GlobalState";
import { DELETE_ITEM_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

export default function CartItem({ item }) {
  const [_, dispatch] = useCartItemContext();

  function deleteItem() {
    dispatch({
      type: DELETE_ITEM_CART,
      id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
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
