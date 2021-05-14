import { Box, Heading, Text, Link, VStack, Divider } from '@chakra-ui/react';
import React from 'react';
import { Api } from '../components/modules/Api';
import { Installation } from '../components/modules/Installation';
import { Playground } from '../components/modules/Playground';
import { Usage } from '../components/modules/Usage';

export const Home: React.FC = () => {
  return (
    <Box p={6} flex="auto" w={{ lg: '85%', base: '100%' }} bg="gray.50">
      <Box mb={8}>
        <Heading as="h1" size="lg" textAlign="center">
          Documentation for: @bazhe/pagination
        </Heading>
        <Text textAlign="center" fontSize={{ base: 'md', lg: 'lg' }}>
          Github:{' '}
          <Link href="https://github.com/Blagoj5/pagination" color="blue.500">
            https://github.com/Blagoj5/pagination
          </Link>
        </Text>
      </Box>
      <VStack spacing={4}>
        <Playground />
        <Divider />
        <Installation />
        <Divider />
        <Usage />
        <Api />
      </VStack>
    </Box>
  );
};
