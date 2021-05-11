import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { Installation } from '../components/modules/Installation';
import { Playground } from '../components/modules/Playground';

export const Home: React.FC = () => {
  return (
    <Box w="100%" p={6}>
      <Heading as="h1" size="lg" textAlign="center">
        Documentation for: @bazhe/pagination
      </Heading>
      <Text textAlign="center" fontSize={{ base: 'sm', lg: 'md' }}>
        Example code at:{' '}
        <Link
          href="https://github.com/Blagoj5/pagination/tree/main/example"
          color="blue.500"
        >
          https://github.com/Blagoj5/pagination/tree/main/example
        </Link>
      </Text>
      <VStack spacing={4}>
        <Playground />
        <Installation />
      </VStack>
    </Box>
  );
};
