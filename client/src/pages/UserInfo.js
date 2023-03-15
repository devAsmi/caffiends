import { Avatar, Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import Welcome from "./userPages/Welcome"
import Rewards from "./userPages/Rewards"
import Account from "./userPages/Account"
import PreviousOrders from "./userPages/PreviousOrders"
import { useQuery } from "@apollo/client"
import { QUERY_USERS } from "../utils/queries"

export default function UserInfo() {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users;
  
  const [currentPage, setCurrentPage] = useState("Welcome")

  const renderPage = (users) => {
    if (currentPage === 'Rewards') {
      return <Rewards users={users}/>;
    }
    if (currentPage === 'Account') {
      return <Account users={users} />;
    }
    if (currentPage === 'PreviousOrders') {
      return <PreviousOrders users={users} />;
    }
    return <Welcome users={users} />;
  };



  return (
    <Box bgGradient='linear(to-r, teal.200, teal.400)' padding="2">
      {/* Hi User Section */}
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Avatar size='2xl' src='https://devasmi.github.io/porfolio/IMG-0438.jpg' bg="#d7c0d0"/>
        <Heading ml="5">Hi, Caffriend!</Heading>
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
          loading ? (<div>Loading...</div>) : (renderPage(users))
        }
      </Box>
    </Box>
  );
}
