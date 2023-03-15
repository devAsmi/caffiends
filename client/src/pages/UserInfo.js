import { Avatar, Box, Flex, Heading, Button } from "@chakra-ui/react"
import { useState } from "react"
import Welcome from "./userPages/Welcome"
import Rewards from "./userPages/Rewards"
import Account from "./userPages/Account"
import PreviousOrders from "./userPages/PreviousOrders"
import { useQuery } from "@apollo/client"
import { QUERY_SELF } from "../utils/queries"
import CreateMembership from "./userPages/CreateMembership"

export default function UserInfo() {
  const { loading, data } = useQuery(QUERY_SELF);
  const self = data?.self;
  
  const [currentPage, setCurrentPage] = useState("Welcome")

  const renderPage = (self) => {
    if (currentPage === 'Rewards') {
      return <Rewards self={self}/>;
    }
    if (currentPage === 'Account') {
      return <Account self={self} />;
    }
    if (currentPage === 'PreviousOrders') {
      return <PreviousOrders self={self} />;
    }
    return <Welcome self={self} />;
  };



  return (
    <div>
      {self ? (
    <Box bgGradient='linear(to-r, teal.200, teal.400)' padding="2">
    {/* Hi User Section */}
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Avatar size='2xl' src='https://devasmi.github.io/porfolio/IMG-0438.jpg' bg="#d7c0d0"/>
      <Heading ml="5">Hi, {self.name}!</Heading>
    </Flex>

    {/* Nav Section */}
    <Flex justifyContent={"space-around"} mt="10">
      <Button bgColor='#826e9b' color="white" size='lg' onClick={() => setCurrentPage("Welcome")}>
        Welcome
      </Button>

      <Button bgColor='#826e9b' color="white" size='lg' onClick={() => setCurrentPage("Rewards")}>
        My Rewards
      </Button>

      <Button bgColor='#826e9b' color="white" size='lg' onClick={() => setCurrentPage("Account")}>
        Edit My Account
      </Button>

      <Button bgColor='#826e9b' color="white" size='lg' onClick={() => setCurrentPage("PreviousOrders")}>
        Previous Orders
      </Button>

    </Flex>

    {/* Rendered Page Section */}
    <Box>
      {
        loading ? (<div>Loading...</div>) : (renderPage(self))
      }
    </Box>
  </Box>
      ) : (
        <CreateMembership />
      )}      
    </div>

  );
}
