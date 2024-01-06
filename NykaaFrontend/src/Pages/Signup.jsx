import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';

const Signup = () => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, avatar } = input;
    const data = {
      name,
      email,
      password,
      avatar,
    };

    try {
      const response = await axios.post(
        'https://nykadashboardbackend.onrender.com/user/register',
        data
      );

      if (response.status === 200) {
        alert('User registered successfully', response.data);
        nav('/login');
      } else {
        alert('Unexpected response status:', response.status);
        setErrorMessage(`${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error.response.data.message);
      setErrorMessage(`${error.response.data.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <Box
      minH="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
     
    >
      <Box
        bg="white"
        p="8"
        rounded="md"
        shadow="md"
        w="96"
        textAlign="center"
        maxW="sm"
      margin="auto"
      
      >
        <Heading as="h1" size="xl" fontWeight="bold" mb="6">
          Signup
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel fontSize="sm" fontWeight="bold" mb="2">
              Username
            </FormLabel>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              border="1px"
              borderColor="blue.500"
              focusBorderColor="blue.500"
              placeholder="Enter your username"
              isRequired
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel fontSize="sm" fontWeight="bold" mb="2">
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              border="1px"
              borderColor="blue.500"
              focusBorderColor="blue.500"
              placeholder="Enter your email"
              isRequired
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel fontSize="sm" fontWeight="bold" mb="2">
              Password
            </FormLabel>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              border="1px"
              borderColor="blue.500"
              focusBorderColor="blue.500"
              placeholder="Enter your password"
              isRequired
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel fontSize="sm" fontWeight="bold" mb="2">
              Avatar (Profile Picture)
            </FormLabel>
            <Input
              type="text"
              name="avatar"
              value={input.avatar}
              onChange={handleChange}
              border="1px"
              borderColor="blue.500"
              focusBorderColor="blue.500"
              placeholder="Enter image URL"
              isRequired
            />
          </FormControl>
          {errorMessage && (
            <p style={{ color: 'red' }} className="m-2">
              {errorMessage}
            </p>
          )}
          <Button
            type="submit"
            colorScheme="gray"
            bg="#d45d79"
            size="lg"
            mt="4"
            w="full"
            _hover={{ bg: 'gray' }}
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
