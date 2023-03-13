import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { TOGGLE_CART_DRAWER } from "../utils/actions";
import { useCartItemContext } from "../utils/GlobalState";

export default function Navbar() {
  const [_, dispatch] = useCartItemContext();

  function toggleDrawer() {
    dispatch({
      type: TOGGLE_CART_DRAWER,
    });
  }

  return (
    <Flex height="100px">
      <Button onClick={toggleDrawer}>View cart</Button>
    </Flex>
  );
}
