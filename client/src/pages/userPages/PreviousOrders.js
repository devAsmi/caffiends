import { Flex, Box, Card, Text, Input, Button, Stack } from "@chakra-ui/react";
import React from "react";
import POCard from "../../components/POCard"


export default function PreviousOrders(self) {
  const historyArray = self.self.orderHistory
  return (
    <Flex height="600px" width="full"mt="10">
      <Box border="2px" width="40%" m="3" textAlign="center">
        <Text fontSize="4xl">Forget to Login Before Ordering?</Text>
        <Text fontSize="2xl">If you're missing points from your account, fill out the form to submit a new order to your history!</Text>
        <Card m="3" height="50%" justify="space-around" p="4" bgColor="#d7c0d0">
          <Box>
            <Text as="b">Order Total</Text>
            <Input variant='outline' border="2px"/>
          </Box>


          <Box>
            <Text as="b">Points Earned</Text>
            <Input variant='outline' border="2px"/>
          </Box>


          <Button bgColor="#826e9b" color="white">Submit</Button>
        </Card>
      </Box>


      <Box border="2px" width="60%" m="3" textAlign="center">
        <Text fontSize="4xl">Order History</Text>
        <Stack p="4">
        {historyArray.map((order) => (
            <POCard order={order}/>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
}
