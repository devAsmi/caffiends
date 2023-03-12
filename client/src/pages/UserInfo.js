import { Avatar, Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import Welcome from "./userPages/Welcome"
import Rewards from "./userPages/Rewards"
import Account from "./userPages/Account"
import PreviousOrders from "./userPages/PreviousOrders"

export default function UserInfo() {
  const [currentPage, setCurrentPage] = useState("Welcome")

  const renderPage = () => {
    if (currentPage === 'Rewards') {
      return <Rewards />;
    }
    if (currentPage === 'Account') {
      return <Account />;
    }
    if (currentPage === 'PreviousOrders') {
      return <PreviousOrders />;
    }
    return <Welcome />;
  };

  return (
    <Box bg="#FEEBC8" p="4">
      {/* Hi User Section */}
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Avatar size='2xl' src='https://devasmi.github.io/porfolio/IMG-0438.jpg' bg="#DD6B20"/>
        <Heading ml="5">Hi, Caffriend!</Heading>
      </Flex>

      {/* Nav Section */}
      <Flex justifyContent={"space-around"} mt="10">
        <Button colorScheme="green" size='lg' onClick={() => setCurrentPage("Welcome")}>
          Welcome
        </Button>

        <Button colorScheme='green' size='lg' onClick={() => setCurrentPage("Rewards")}>
          My Rewards
        </Button>

        <Button colorScheme='green' size='lg' onClick={() => setCurrentPage("Account")}>
          Edit My Account
        </Button>

        <Button colorScheme='green' size='lg' onClick={() => setCurrentPage("PreviousOrders")}>
          Previous Orders
        </Button>

      </Flex>

      {/* Rendered Page Section */}
      <Box>
        {renderPage()}
      </Box>
    </Box>
  );
}
