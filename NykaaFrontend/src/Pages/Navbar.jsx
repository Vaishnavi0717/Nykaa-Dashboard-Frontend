import React from 'react';
import { Link as ChakraLink, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isAuth, name, avatar } = useSelector((store) => ({
    isAuth: store.authReducer.isAuth,
    name: store.authReducer.name,
    avatar: store.authReducer.avatar,
    errorMessage: store.authReducer.errorMessage,
  }));

  return (
    <Box bg="#d45d79" p="4">
      <Flex justify="space-between" align="center" maxW="6xl" mx="auto">
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="extrabold" color="white">
            Nykaa
          </Heading>
        </Box>
        <Flex align="center">
          {isAuth ? (
            <Flex gap="2" justify="space-around" align="center">
              <Text color="white" fontWeight="bold">
                {name}
              </Text>
              <Image boxSize="10" borderRadius="full" src={avatar} alt="avatar" />
            </Flex>
          ) : (
            <Flex spaceX="4">
              <ChakraLink href="/signup" color="white" _hover={{ color: 'gray.300' }}>
                Signup
              </ChakraLink>
              <ChakraLink href="/login" color="white" _hover={{ color: 'gray.300' }}>
                Login
              </ChakraLink>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
