import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProd, postProd } from '../Redux/product/action';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
} from '@chakra-ui/react';

const ProductModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    category: '',
    price: '',
    description: '',
    picture: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    const { name, gender, category, price, description, picture } = formData;
    const newProd = { name, gender, category, price, description, picture };

    dispatch(postProd(newProd));
    dispatch(getProd());
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            mb="4"
            placeholder="Product Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Select
            mb="4"
            placeholder="Select Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
          <Select
            mb="4"
            placeholder="Select Category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="makeup">Makeup</option>
            <option value="skincare">Skincare</option>
            <option value="haircare">Haircare</option>
          </Select>
          <Input
            mb="4"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <Input
            mb="4"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <Input
            mb="4"
            placeholder="Avatar URL"
            name="picture"
            value={formData.picture}
            onChange={handleInputChange}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddProduct}>
            Add Product
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
