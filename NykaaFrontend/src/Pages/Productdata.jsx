import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProd } from '../Redux/product/action';
import { Table, Thead, Tbody, Tr, Th, Td, Image, Button } from '@chakra-ui/react';

const Productdata = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.prodReducer.products);
  const [searchParams] = useSearchParams();
  const paramsobj = {
    params: {
      gender: searchParams.getAll('gender'),
      category: searchParams.getAll('category'),
      sort: searchParams.get('order') && 'price',
      order: searchParams.get('order'),
    },
  };

  useEffect(() => {
    dispatch(getProd(paramsobj));
  }, [searchParams]);

  return (
    <Table variant="simple" size="md" bg="white" border="1px" borderColor="gray.300">
      <Thead>
        <Tr>
          <Th>Products</Th>
          <Th>Gender</Th>
          <Th>Category</Th>
          <Th>Price</Th>
          <Th>Description</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array.isArray(products) &&
          products?.map((item) => (
            <Tr key={item.id} borderBottom="1px" borderColor="gray.300">
              <Td display="flex" alignItems="center" gap="4" py="2" px="4">
                <Image boxSize="8" borderRadius="lg" src={item.picture} alt="avatar" />
                {item.name}
              </Td>
              <Td py="2" px="4">{item.gender}</Td>
              <Td py="2" px="4">{item.category}</Td>
              <Td py="2" px="4">{item.price}</Td>
              <Td py="2" px="4">{item.description}</Td>
              <Td py="2" px="4">
                <Button bg="#e7b3b3" size="sm" mr="2">
                  Edit
                </Button>
                <Button bg="darkgray" size="sm">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default Productdata;
