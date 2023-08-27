import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../Images/Logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginRequest } from "../Redux/Authentication/action";
import { Login_SUCCESS } from "../Redux/Authentication/actionTypes";
import { useContext } from "react";
import { Context } from "../Redux/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showpass, setShowPass] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathComingFrom = location.state?.from?.pathname || "/";

  const {setToken, setLoggedInUser, setUserNameLogged} = useContext(Context)

  const handleLogin = async () => {
    const credentials = { email, pass };

    dispatch(LoginRequest(credentials))
      .then((res) => {
        dispatch({
          type: Login_SUCCESS,
          payload: [res.data.userDetails, res.data.token]
        });
        console.log(res.data.userDetails)
        setToken(res.data.token);
        setLoggedInUser(res.data.userDetails);
        setUserNameLogged(res.data.userDetails.name)
        if (res.data.msg === "User Doesn't Exists!") {
           toast.error("User Doesn't Exists!")
        } else if(res.data.msg==="Wrong Password!") {
          toast.error("Invalid credentials");
        }
        else{       
          toast.success("Login Successfull")
          navigate("/home")
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error("Invalid credentials.");
      });

    // try {
    //   const response = await dispatch(LoginRequest(credentials));
    //   const successMessage = 'Signed in successfully';
    //   if (response && response === '/admin') {
    //     navigate('/admin');
    //     return;
    //   }
    //   if (response.type === 'Login_FAILURE') {
    //     toast.error('Invalid credentials');
    //   } else {
    //     toast.success(successMessage);
    //     navigate(pathComingFrom, { replace: true });
    //   }
    // } catch (error) {
    //   toast.error('Invalid credentials.');
    // }
  };

  const handleTogglepass = () => {
    setShowPass(!showpass);
  };

  return (
    <>
      <ToastContainer />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.100"}>
        <Box
          w={"80%"}
          bg={"white"}
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          mx={4}
          my={8}
        >
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex flex={2} display={{ base: "none", md: "block" }} mr={8}>
              <Image
                alt={"Sign Up Image"}
                objectFit={"cover"}
                src={logo}
                h="100%"
              />
            </Flex>
            <Stack spacing={4} w={{ base: "full", md: "50%" }}>
              <Heading fontSize={"2xl"}>Sign in to your account</Heading>
              <FormControl id="email" isRequired>
                <FormLabel mb={2}>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="pass" isRequired>
                <FormLabel mb={2}>pass</FormLabel>
                <InputGroup>
                  <Input
                    type={showpass ? "text" : "pass"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    size="md"
                  />
                  <InputRightElement width="3rem">
                    {showpass ? (
                      <ViewOffIcon onClick={handleTogglepass} />
                    ) : (
                      <ViewIcon onClick={handleTogglepass} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={handleLogin}
                size="md"
              >
                Sign in
              </Button>
              <Text mt={2} textAlign="center" fontSize="md" color="black.500">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
