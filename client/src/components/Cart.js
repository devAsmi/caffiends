import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useCartItemContext } from "../utils/GlobalState";
import CartItem from "./CartItem";

export default function Cart() {
  const [state, dispatch] = useCartItemContext();
  const { cartItems } = state;
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = transformCartItems();
    setCart(cart);
  }, [cartItems]);

  function transformCartItems() {
    const cart = {};
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      if (cartItem._id in cart) {
        cart[cartItem._id].quantity = cart[cartItem._id].quantity + 1;
      } else {
        cart[cartItem._id] = {
          name: cartItem.name,
          price: cartItem.price,
          points: cartItem.points,
          quantity: 1,
        };
      }
    }
    return cart;
  }

  return (
    <Flex direction="column">
      <Heading size={"xl"}>Cart</Heading>
      {Object.values(cart).map((item) => {
        return <CartItem key={item.name} item={item} />;
      })}
    </Flex>
  );
}
