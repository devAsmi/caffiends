import { useRef, useState, useEffect } from "react";
// import { VisuallyHidden } from "@chakra-ui/react";
// import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Input,
  Flex,
  Heading,
  Show,
  Text,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage, 
FormHelperText} from "@chakra-ui/react";

// username require an email
const USER_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
// password will require 1 lowercase, 1 Uppercase, 1 digit and 1 special character
const PASS_REGEX = /^(?=.*[a-z)])(?=.*[A_Z)])(?=.[*0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Registration() {
  const userRef = useRef();
  // const errRef = userRef();
  // const errRef = useRef();
  // user name set, validate , focused on the input field
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // setting password and is the password valid,is focused on the input field
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  //  password match the first entry

  const [verifyPass, setverifyPass] = useState("");
  const [verfied, setValidMatchPass] = useState(false);
  const [verifyPassFocus, setVerifyPassFocus] = useState(false);
  // err and success message after registration complete
  const [isError, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

  // validation of username user state is what is in the array
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPass(PASS_REGEX.test(password));
    setValidMatchPass(password === verifyPass);
  }, [password, verifyPass]);

  // // display msg

  useEffect(() => {
    setErrMsg("");
  }, [user, password, verifyPass]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const validateEmail = USER_REGEX.text(user);
    const validatePassword = PASS_REGEX.test(password);
    if (!validateEmail || !validatePassword) {
      setErrMsg("Not Valid");
      return;
    }
  }
 

    return (
      <Flex height="150vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="purple.100" p={10} rounded={5}>
          <Show></Show>
          <Center>
            <Heading mb={5}>Caffiend {JSON.stringify(validName)}Club Membership</Heading>
          </Center>

          <form onSubmit={handleSubmission}>
            {/* htmlFor is a way to set/return the value of the attribute of a label in this instance it's setting it for user */}
            <FormControl isInvalid={isError} >
              <FormLabel forhtml="username">
               
                  {/* {!isError ? ( <CheckCircleIcon w={4} h={4} color="green.500" />)
                  :  ( <WarningIcon w={4} h={4} color="red.500" />)} */}
                
                 
             
              </FormLabel>
              <Input
                variant="filled"
                placeholder="myemail@email.com"
                mb={5}
                type="email"
                name="userName"
                ref={userRef}
                autoComplete="off"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                // state indicates the the entered value is not what's expected
                aria-invalid={validName ? "false" : "true"}
                // descripes the element that the attribute is  set on
                aria-describedby="userNote"
               
              />
{isError? ("") : (<FormErrorMessage>
                {/* Must start with a letter, can contain letters,numbers and _. Has
                to be at least 4 to 15 characters long. */}
              </FormErrorMessage>)}
              
           

           {/* <FormHelperText>Must start with a letter, can contain letters,numbers and _. Has
              to be at least 4 to 15 characters long.</FormHelperText> */}
      
              
            
            
              <FormLabel forhtml="password">
            {/* <Show className={validPass ? "valid" : "hide"}>
                <CheckCircleIcon w={4} h={4} color="green.500" />
              </Show>
              <Show className={validPass || !password ? "hide" : "invalid"}>
                <WarningIcon w={4} h={4} color="red.500" />
              </Show> */}
              </FormLabel>
               <Input
              pr="4.5rem"
              type={"password"}
              placeholder="*********"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-invalid={validPass ? "false" : "true"}
              aria-describedby="passnote"
              // onFocus={() => setPassFocus(true)}
              // onBlur={() => setPassFocus(false)}
            />
            {/* //className={passFocus && password && !validPass} */}
            <FormErrorMessage >
               The following is needed for a valid password 1 lowercase, 1
              Uppercase, and 1 special character.
            </FormErrorMessage>
            </FormControl>
          

            <Button
              disabled={!validName || !validPass ? true : false}
            >
              Sign-up
            </Button>
          </form>
          <Box>
            <Text> Already a member?</Text>
            <Link to="/Login">Sign In</Link>
          </Box>
        </Flex>
      </Flex>
    );
  };

