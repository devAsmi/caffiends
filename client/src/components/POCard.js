import {
    Flex,
    Text,
    Stack
  } from "@chakra-ui/react";

export default function PreviousOrderCard(order) {
    const date = order.order.orderDate.split(" ")
    const anotherdate = date[0].split(",")
    const orderDate = anotherdate[0]
    return (
          <Flex fontSize="2xl" mt="4" borderBottom="2px" p="3">
            <Stack direction="row" gap="5">
                <Text>{orderDate}</Text>
                <Text>{`Total: $${order.order.total}`}</Text>
                <Text>{`Points Earned: ${order.order.points}`}</Text>
            </Stack>

          </Flex>
    )
}