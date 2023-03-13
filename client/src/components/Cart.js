import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useCartItemContext } from "../utils/GlobalState";
import CartItem from "./CartItem";

export default function Cart() {
  const [state, dispatch] = useCartItemContext();
  const { cartItems } = state;

  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPoint,setTotalPoint] = useState(0);

  useEffect(() => {
    processCartItems();
  }, [cartItems]);

  function processCartItems() {
    const cart = {};
    let totalPriceForItems = 0;
    let totalPointFotItems = 0;
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
      totalPriceForItems = cartItem.price + totalPriceForItems;
      totalPointFotItems = cartItem.points + totalPointFotItems;
    }
    setTotalPrice(totalPriceForItems);
    setTotalPoint(totalPointFotItems);
    setCart(cart);
  }

  return (
    <Flex direction="column">
      <Heading size={"xl"}>Cart</Heading>
      <UnorderedList>
        {Object.values(cart).map((item) => {
          return (
            <ListItem key={item.name}>
              <CartItem item={item} />
            </ListItem>
          );
        })}
      </UnorderedList>
      <div>Total price: {totalPrice.toFixed(2)}</div>
      <div>Total eligible points:{totalPoint} </div>
    </Flex>
  );
}
