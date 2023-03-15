import { Box, Heading, Text, Flex, HStack} from "@chakra-ui/react";
import React from "react";

export default function AboutUs() {
  return (
    <Flex bgGradient='linear(to-r, teal.200, teal.400)' textAlign="center" alignItems="center" justifyContent="center" direction="column" width="full" height="container.sm">
        <Box>
            <Heading m="3">
                Are you ready to be our Caffriend?
            </Heading>
            <Text fontSize="2xl">
                Click the Sign Up button now to start taking advantage of our amazing features!
            </Text>
        </Box>

        <Box>
            <HStack gap="6" py="7" >
                <Flex height= "270px" width = "270px" align="center" justify="center" borderRadius="100%" fontSize="2xl" bg="#d7c0d0"><Text width="80%">Start Earning Points With Our Rewards System</Text></Flex>
                <Flex height= "270px" width = "270px" align="center" justify="center" borderRadius="100%" fontSize="2xl" bg="#d7c0d0"><Text width="80%">Share Your Referral Code With Friends for Free Items</Text></Flex>
                <Flex height= "270px" width = "270px" align="center" justify="center" borderRadius="100%" fontSize="2xl" bg="#d7c0d0"><Text width="80%">Keep Track of Your Past Visits for Easier Ordering Next Time</Text></Flex>
                <Flex height= "270px" width = "270px" align="center" justify="center" borderRadius="100%" fontSize="2xl" bg="#d7c0d0"><Text width="80%">Redeem a Free Coffee/Item for Every 10,000 Points Earned</Text></Flex>
            </HStack>
        </Box>



    </Flex>
  );
}
