import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Images/Logo.png";
import { signup } from "../Redux/Authentication/action";
import { SIGNUP_SUCCESS } from "../Redux/Authentication/actionTypes";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    const userData = {
      name,
      email,
      pass,
    };

    dispatch(signup(userData))
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS });
        console.log(response.data.message);
        if (response.data.message === "Email Already Registered!") {
          toast.error("Username or email already exits");
        } else if (response.data.msg == "User Registered Sucessfully!") {
          toast.success("Account created successfully");
          setTimeout(() => {
            navigate("/login");
            console.log("Account created");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Please try again later.");
      });
  };
  // const handleSignUp = async () => {
  //   if (password !== confirmPassword) {
  //     toast.error("Passwords do not match");
  //     return;
  //   }

  //   const userData = {
  //     username: username,
  //     email: email,
  //     password: password,
  //   };

  //   try {
  //     const success = await dispatch(signupRequest(userData));

  //     if (success) {
  //       toast.success("Account created successfully");
  //       setTimeout(() => {
  //         navigate("/login");
  //         console.log("Account created");
  //       }, 2000);
  //     } else {
  //       toast.error("Username or email already exits");
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong. Please try again later.");
  //   }
  // };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
              <Heading fontSize={"2xl"}>Create an account</Heading>
              <FormControl id="username" isRequired>
                <FormLabel mb={2}>Username</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel mb={2}>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel mb={2}>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    size="md"
                  />
                  <InputRightElement width="3rem">
                    {showPassword ? (
                      <ViewOffIcon onClick={handleTogglePassword} />
                    ) : (
                      <ViewIcon onClick={handleTogglePassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel mb={2}>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    size="md"
                  />
                  <InputRightElement width="3rem">
                    {showConfirmPassword ? (
                      <ViewOffIcon onClick={handleToggleConfirmPassword} />
                    ) : (
                      <ViewIcon onClick={handleToggleConfirmPassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={handleSignUp}
                size="md"
              >
                Sign up
              </Button>
              <Text mt={2} textAlign="center" fontSize="md" color="black.500">
                Already have an account? <Link to="/login">Sign in</Link>
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default SignUp;
