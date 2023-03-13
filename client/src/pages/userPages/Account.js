import React from "react";
import { Box, Flex, Card, Text, Button, Stack } from "@chakra-ui/react"

export default function Account() {
  const email = "aguilera.k02@gmail.com"
  return (
  <Flex direction="column" height="600px" width="full" mt="10">
    <Flex m="5" direction="column" height="full" justify="space-around" fontSize="2xl">
      {/* Full Name */}
      <Flex border="2px" borderRadius="5px" p="6" direction="row">
        <Stack spacing="25px" direction="row">
          <Text>Full Name:</Text>
          <Text>Kayla Teresa Asmita Melissa</Text>          
        </Stack>
      </Flex>

      {/* Email */}
      <Flex border="2px" borderRadius="5px" p="6" direction="row">
        <Stack spacing="25px" direction="row">
          <Text>Email:</Text>
          <Text>{email}</Text>          
        </Stack>
      </Flex>

      {/* Password */}
      <Flex border="2px" p="6" borderRadius="5px" direction="row">
        <Stack spacing="25px" direction="row">
          <Text>Password:</Text>
          <Text>***********</Text>          
        </Stack>
      </Flex>

      {/* Payment Types */}
      <Flex border="2px" p="6" borderRadius="5px" direction="row">
        <Stack spacing="25px" direction="row">
          <Text>Payment Types:</Text>
            <a href="http://www.merchantequip.com/information-center/credit-card-logos/">
                <img
                        src="https://www.merchantequip.com/images/logos/disc-mc-visa-amex-380x67.gif" width="380" height="67"
                        alt="Merchant Equipment Store Credit Card Logos"/>
            </a>  
        </Stack>
      </Flex>

      {/* Delete Your Account */}
      <Flex border="2px" p="6" borderRadius="5px" direction="row" justify="space-evenly" align="center">
        <Text as="b">Not Satisfied With Your Membership?</Text>
        <Button colorScheme="yellow">File A Complaint</Button>
        <Button colorScheme="red">Delete Your Account</Button>
      </Flex>
    </Flex>

  </Flex>
  );
}
