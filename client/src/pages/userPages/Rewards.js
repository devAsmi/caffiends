import React from "react";
import { Box, Text, Divider, Flex, CircularProgress, Button } from "@chakra-ui/react"


export default function Rewards() {
  return (
    <Flex direction="column" height="600px" width="full" border="1px" borderRadius="5px" mt="10">
      <Text fontSize="5xl" alignSelf="center" mt="8">For every 10,000 Points Earned, You'll Get a Free Coffee!</Text>

      <Flex direction="row" p="8" justifyContent="center" alignItems="center">
        <Box textAlign="center">
          <Text fontSize="4xl" px="10">Total Points</Text>
          <Text fontSize="4xl" px="10">800</Text>
        </Box>

        <Box>
          <CircularProgress value={40} size="200px" color="#DD6B20"/>
        </Box>
      </Flex>

      <Divider width="95%" alignSelf="center"/>

      <Flex alignItems="center" direction="column">
        <Text fontSize="4xl" mt="5">Available Rewards</Text>
        <Flex direction="column">
          <Button mt="2" colorScheme="green">Free Coffee</Button>
          <Button mt="2" colorScheme="green">Free Coffee</Button>
        </Flex>
      </Flex>
    </Flex>

    // <Flex height="600px" width="full" direction="row" mt="10" justifyContent="space-around" bgSize="cover" borderRadius="10px">
    //   <Box p="8" width="655px">
    //     <Heading m="2">Total Stars</Heading>
    //     <Text fontSize="3xl" mt="9" ml="2">Referral Code</Text>
    //   </Box>
    // </Flex>    
  );
}
