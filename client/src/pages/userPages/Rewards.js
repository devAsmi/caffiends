import React from "react";
import { Box, Text, Divider, Flex, CircularProgress, Button } from "@chakra-ui/react"




export default function Rewards(self) {
  const orderArray = (self.self.orderHistory)
  const points = orderArray.map((order) => {
    return order.points;
  }
  )
  let totalPoints = 0;

  for (var i = 0; i < points.length; i++) {
    totalPoints += points[i];
  }

  let totalPointsTwo = totalPoints;
  console.log(totalPointsTwo)
  return (
    <Flex direction="column" height="600px" width="full" border="1px" borderRadius="5px" mt="10">
      <Text fontSize="5xl" alignSelf="center" mt="8">For every 10,000 Points Earned, You'll Get a Free Coffee!</Text>


      <Flex direction="row" p="8" justifyContent="center" alignItems="center">
        <Box textAlign="center">
          <Text fontSize="4xl" px="10">Total Points</Text>
          <Text fontSize="4xl" px="10">{totalPointsTwo || 0}</Text>
        </Box>


        <Box>
          <CircularProgress value={totalPointsTwo || 0 } max="10000" size="200px" color="#d7c0d0"/>
        </Box>
      </Flex>


      <Divider width="95%" alignSelf="center"/>


      <Flex alignItems="center" direction="column">
        <Text fontSize="4xl" mt="5">Available Rewards</Text>
        <Flex direction="column">
          <Button mt="2" bgColor="#826e9b" color="white">Free Coffee</Button>
          <Button mt="2" bgColor="#826e9b" color="white">Free Coffee</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
