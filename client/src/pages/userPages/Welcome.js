import { Text, Heading, Box, Flex } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Box height="600px" width="full" direction="column" alignItems="center" mt="10" justifyContent="space-around" bgImage="url(https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)" bgSize="cover" borderRadius="10px">
      <Box p="8" width="655px">

        <Flex direction="column" borderBottom="1px" borderColor="white">
          <Heading m="2">Enjoying Your Experience?</Heading>
          <Text fontSize="3xl" m="2">Earn a free coffee or treat when any of your friends use your referral code!</Text>
        </Flex>

        <Box>
        <Text fontSize="3xl" mt="9" ml="2">Referral Code</Text>
        <Flex borderWidth="4px" width="300px" height="80px" justifyContent="center" alignItems="center" borderStyle="dashed" m="2" borderColor="#826e9b">
          <Text fontSize="2xl" as="b">J3Q1mNI2Lz</Text>
        </Flex>
        </Box>

      </Box>
    </Box>
  );
}
