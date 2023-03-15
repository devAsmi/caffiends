import React, { useState } from "react";
import { Link } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/Auth";
import {
  Input,
  Flex,
  Heading,
  Button,
  FormControl,
  Center
  // FormHelperText,
  // FormErrorMessage,
  // FormLabel,
 
} from "@chakra-ui/react";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const change = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const logUserIn = async (event) => {
    event.preventDefault();
    try {
      const { data, err } = await login({
        variables: { ...formState },
      });
      if(err){
        console.log(error)
      }
      console.log(data)
      Auth.loginUser(data.loginUser.token);
    } catch (e) {
      window.alert(e)
       
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <Flex height="150vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={10} rounded={5}>
       <Center>
       <Heading mb={3}>Login</Heading>
       </Center>
          
  
     

      <form onSubmit={logUserIn}>
        <FormControl isRequired>
       
          <Input
            placeholder="youremail@email.com"
            name="username"
            type="email"
            id="username"
            bm= {5}
            value={formState.username}
            onChange={change}
          />
        
       
          <Input
            placeholder="********"
            name="password"
            id="password"
            type="password"
            bm= {5}
            value={formState.password}
            onChange={change}
          />
        
            <Button  mt={4}
              colorScheme= 'purple'
              type="submit">Login</Button>
        
        
        </FormControl>
      </form>
    </Flex>
    </Flex>
  );
};

export default Login;