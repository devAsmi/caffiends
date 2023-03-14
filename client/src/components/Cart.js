import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Button,
  Box,
  Alert,
  AlertIcon,
  Divider,
} from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { useCartItemContext } from "../utils/GlobalState";
import { QUERY_CHECKOUT } from "../utils/queries";
import CartItem from "./CartItem";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Cart() {
  const [state] = useCartItemContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const { cartItems } = state;

  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    const itemIds = [];

    state.cartItems.forEach((item) => {
      itemIds.push(item._id);
    });

    getCheckout({
      variables: { items: itemIds, total: totalPrice, points: totalPoint },
    });
  }

  useEffect(() => {
    const cart = {};
    let totalPriceForItems = 0;
    let totalPointFotItems = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      if (cartItem._id in cart) {
        cart[cartItem._id].quantity = cart[cartItem._id].quantity + 1;
        cart[cartItem._id].price = cart[cartItem._id].quantity * cartItem.price;
        cart[cartItem._id].points =
          cart[cartItem._id].quantity * cartItem.points;
      } else {
        cart[cartItem._id] = {
          id: cartItem._id,
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
  }, [cartItems]);

  return (
    <Flex direction="column" padding={4} gap="8">
      <Heading size={"xl"} color={"Teal"}>
        Cart
      </Heading>
      {cartItems.length <= 0 && (
        <Alert status="info">
          <AlertIcon />
          No Items added to the cart
        </Alert>
      )}
      {cartItems.length > 0 && (
        <>
          <Card>
            <CardBody>
              <UnorderedList spacing="2">
                {Object.values(cart).map((item) => {
                  return (
                    <ListItem key={item.name} listStyleType="none">
                      <CartItem item={item} />
                      <Divider />
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </CardBody>
          </Card>
          <Box>
            <Text fontSize="2xl" color="Teal">
              Total price: ${totalPrice.toFixed(2)}
            </Text>
            <Text fontSize="2xl" color="Teal">
              Total eligible points: {totalPoint}
            </Text>
          </Box>
          <Button
            colorScheme="teal"
            alignItems="center"
            onClick={submitCheckout}
          >
            CheckOut
          </Button>
        </>
      )}
    </Flex>
  );
}
