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
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const [state] = useCartItemContext();
  const { cart } = state;

  const [localCart, setLocalCart] = useState({});
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

    Object.values(cart).forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        itemIds.push(item._id);
      }
    });

    getCheckout({
      variables: { items: itemIds, total: totalPrice, points: totalPoint },
    });
  }

  useEffect(() => {
    const localCart = {};
    let totalPriceForItems = 0;
    let totalPointFotItems = 0;
    const cartItems = Object.values(cart);

    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      localCart[cartItem._id] = {
        _id: cartItem._id,
        name: cartItem.name,
        price: cartItem.price * cartItem.quantity,
        points: cartItem.points * cartItem.quantity,
        quantity: cartItem.quantity,
      };
      totalPriceForItems = localCart[cartItem._id].price + totalPriceForItems;
      totalPointFotItems = localCart[cartItem._id].points + totalPointFotItems;
    }
    setLocalCart(localCart);
    setTotalPrice(totalPriceForItems);
    setTotalPoint(totalPointFotItems);
  }, [cart]);

  return (
    <Flex direction="column" padding={4} gap="8">
      <Heading size={"xl"} color={"Teal"}>
        Cart
      </Heading>
      {Object.values(localCart).length <= 0 && (
        <Alert status="info">
          <AlertIcon />
          No Items added to the cart
        </Alert>
      )}
      {Object.values(localCart).length > 0 && (
        <>
          <Card>
            <CardBody>
              <UnorderedList spacing="2">
                {Object.values(localCart).map((item) => {
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
