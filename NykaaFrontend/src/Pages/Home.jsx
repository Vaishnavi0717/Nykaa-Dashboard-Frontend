import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" my="4" justifyContent="center" alignItems="center">
      <Heading as="h1" fontFamily="Poppins" fontSize="lg" my="4">
        Welcome, You Can Login For Admin Dashboard
      </Heading>
      <Image
        className="border rounded-xl"
        width="100%"
        src="https://media.licdn.com/dms/image/D4D12AQGfMQdEyuAvHg/article-inline_image-shrink_1500_2232/0/1663313096880?e=1709164800&v=beta&t=TZ2iYqOBfkp2kMeR_UylwEuHtHT1yUCxNab7A6T7Ips"
        alt="nykaa"
      />
    </Box>
  );
};

export default Home;
