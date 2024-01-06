import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import ProductsPage from './ProductsPage';

const Dashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <ProductsPage />
    </Flex>
  );
};

export default Dashboard;
