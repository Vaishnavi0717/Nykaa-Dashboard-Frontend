import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLog } from '../Redux/auth/action';
import { useNavigate } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const { isAuth, errorMessage } = useSelector(
    (store) => ({
      isAuth: store.authReducer.isAuth,
      errorMessage: store.authReducer.errorMessage,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = input;
    const userData = { email, password };
    dispatch(getLog(userData));
  };

  if (isAuth) {
    nav('/dashboard');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="gray.100"
    >
      <Box bg="white" p="8" rounded="md" w="96">
        <Heading as="h1" fontSize="3xl" fontWeight="bold" mb="6" textAlign="center">
          Welcome To Nykaa
        </Heading>
        <form onSubmit={handleLogin}>
          <FormControl mb="4">
            <FormLabel htmlFor="username" color="gray.700" fontSize="sm" fontWeight="bold">
              Email
            </FormLabel>
            <Input
              type="email"
              id="username"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              border="1px"
              borderColor="blue.500"
              p="2"
              rounded="md"
              _focus={{ borderColor: 'blue.500' }}
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="password" color="gray.700" fontSize="sm" fontWeight="bold">
              Password
            </FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              border="1px"
              borderColor="blue.500"
              p="2"
              rounded="md"
              _focus={{ borderColor: 'blue.500' }}
              placeholder="Enter your password"
              required
            />
          </FormControl>
          {errorMessage && <Text color="red.500" mb="4">{errorMessage}</Text>}
          <Button
            type="submit"
            colorScheme="gray"
            bg="#d45d79"
            w="full"
            p="2"
            rounded="md"
            _hover={{ bg: 'gray' }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
