import {useState} from "react";
// import { VisuallyHidden } from "@chakra-ui/react";
// import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/Auth";
import {
  Input,
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Center,
  FormControl,
  // FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";




const MemberSignUP = () => {
  const [formState, setFormState] = useState({
    user: "",
    username: "",
    password: "",
  });
  
 const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const processFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex height="150vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="purple.100" p={10} rounded={5}>
        <Center>
          <Heading mb={5}>Caffiend Club Membership</Heading>
        </Center>
        <form onSubmit={processFormSubmit}>
        <FormControl isRequired>
          <Input
            variant="filled"
            placeholder="Name"
            mb={5}
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <Input
            variant="filled"
            placeholder="myemail@email.com"
            mb={5}
            type="email"
            name="userName"
            autoComplete="off"
            value={formState.email}
            onChange={handleChange}></Input>
           
        

    
          <Input
            pr="4.5rem"
            mb={5}
            type={"password"}
            placeholder="*********"
            name="password"
            id="password"
            onChange={formState.password}
            required
           
          />
         
        </FormControl>

        <Button
          variantColor="darkPurple"
          variant="outline"
          width="full"
          type="submit"
          mb={5}
        >
          Sign-up
        </Button>

        <Box >
          <Text> Already a member?</Text>
          <Link to="/Login">Sign In</Link>
        </Box>
        </form>
      </Flex>
    </Flex>
  );
};

export default MemberSignUP;
