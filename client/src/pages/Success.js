import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { Flex } from "@chakra-ui/react";

export default function Success() {
  const [createOrder] = useMutation(CREATE_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");

      const items = cart.map((item) => item._id);

      let totalPrice = 0;
      const prices = cart.map((item) => item.price * item.quantity);
      prices.forEach((price) => {
        totalPrice = totalPrice + price;
      });

      let totalPoints = 0;
      const points = cart.map((item) => item.points * item.quantity);
      points.forEach((point) => {
        totalPoints = totalPoints + point;
      });
      const orderDate = new Date().toLocaleString().toString();

      if (items.length) {
        const { data } = await createOrder({
          variables: {
            items,
            orderDate: orderDate,
            total: Number(totalPrice.toFixed(2)),
            points: totalPoints,
          },
        });

        const itemsData = data.createOrder.items;

        itemsData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 5000);
    }

    saveOrder();
  }, [createOrder]);

  return (
    <>
      <Flex
        gap="2"
        color="Teal"
        direction={"column"}
        fontSize="4xl"
        alignItems={"center"}
        justifyContent="center"
      >
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page!</h2>
      </Flex>
    </>
  );
}
