import React from 'react';
import { Link as ChakraLink, Flex, Box, Heading, Link, Text } from '@chakra-ui/react';
import { ReactComponent as DashboardIcon } from '../Images/element-3.svg';
import { ReactComponent as AnalyticsIcon } from '../Images/clipboard-tick.svg';
import { SettingsIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/auth/action';

const Sidebar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    nav("/login");
  };

  return (
    <Flex direction="column" align="center" bg="white" w="57.5" p="4">
      <Box mt="16">
        <Heading as="h1" textAlign="center" fontFamily="poppins" fontWeight="medium" fontSize="xl" color="blue.600">
          Nykaa Dashboard
        </Heading>
      </Box>
      <Flex flexDir="column" align="center" justify="center" mt="28" gap="8">
        <Flex fontFamily="poppins" gap="2" fontSize="base" fontWeight="normal" color="blue.600" _hover={{ color: 'blue.600' }}>
          <DashboardIcon />
          <ChakraLink as={Link} href='/dashboard'>Dashboard</ChakraLink>
        </Flex>
        <Flex fontFamily="poppins" gap="2" fontSize="base" fontWeight="normal" color="blue.600" _hover={{ color: 'blue.600' }}>
          <AnalyticsIcon />
          <ChakraLink as={Link} href='#'>Analytics</ChakraLink>
        </Flex>
        <Flex fontFamily="poppins" gap="2" fontSize="base" fontWeight="normal" color="blue.600" _hover={{ color: 'blue.600' }}>
          <SettingsIcon />
          <Text as="span" cursor="pointer" onClick={handleLogout}>Logout</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
