import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductModal from './ProductModal';
import { Box, Button, FormControl, Heading, Select } from '@chakra-ui/react';

const FilterData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(searchParams.getAll('gender') || []);
  const [category, setCategory] = useState(searchParams.getAll('category') || []);
  const [order, setOrder] = useState(searchParams.get('order') || '');

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handlePrice = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect(() => {
    let params = {
      gender: gender,
      category: category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category, order, setSearchParams]);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Box display="flex" justifyContent="space-around" p="4" bg="gray.100">
      <Box mb="4">
        <Heading as="h3" fontSize="lg" fontWeight="semibold" mb="2">
          Filter By Gender
        </Heading>
        <Select
          value={gender}
          onChange={handleGender}
          className="w-full border rounded p-2"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
        </Select>
      </Box>

      <Box mb="4">
        <Heading as="h3" fontSize="lg" fontWeight="semibold" mb="2">
          Filter By Category
        </Heading>
        <Select
          value={category}
          onChange={handleCategory}
          className="w-full border rounded p-2"
        >
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
        </Select>
      </Box>

      <Box>
        <Heading as="h3" fontSize="lg" fontWeight="semibold" mb="2">
          Sort By Price
        </Heading>
        <Select
          value={order}
          onChange={handlePrice}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Box>

      <Box>
        <Button
          bg="#d45d79"
          mt="60"
          fontSize="base"
          p="3"
          rounded="md"
          onClick={openModal}
        >
          Add Product
        </Button>
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
      </Box>
    </Box>
  );
};

export default FilterData;
