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

  const loginUser = async (event) => {
    event.preventdefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <Flex height="175vh" alignItems="center" justifyContent="end">
      <Flex direction="column" background="gray.100" p={10} rounded={5}>
       
          <Heading mb={3}>Login</Heading>
       
     

      <form onSubmit={loginUser}>
        <FormControl isRequired>
       
          <Input
            placeholder="youremail@email.com"
            name="username"
            type="email"
            bm= {5}
            value={formState.username}
            onChange={change}
          />
        
       
          <Input
            placeholder="********"
            name="password"
            type="password"
            bm= {5}
            value={formState.password}
            onChange={change}
          />
        
       
          {/* <Link to="/homepage"> */}
            <Button  mt={4}
              colorScheme= 'purple'
              type="submit">Login</Button>
          {/* </Link> */}
        
        </FormControl>
      </form>
    </Flex>
    </Flex>
  );
};

export default Login;