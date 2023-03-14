import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { TOGGLE_CART_DRAWER } from "../utils/actions";
import { useCartItemContext } from "../utils/GlobalState";
import Cart from "./Cart";

export default function CartDrawer() {
  const [state, dispatch] = useCartItemContext();
  const { showCartDrawer } = state;

  function onClose() {
    dispatch({
      type: TOGGLE_CART_DRAWER,
    });
  }

  return (
    <Drawer
      isOpen={showCartDrawer}
      placement="right"
      onClose={onClose}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Cart />
      </DrawerContent>
    </Drawer>
  );
}
