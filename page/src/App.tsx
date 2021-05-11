import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Drawer } from './components/modules/Drawer';
import { Home } from './pages/Home';
import './styles/main.css';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
      main: 'rgba(59, 130, 246, 1)',
    },
  },
  styles: {
    global: {
      body: {
        color: 'black',
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh" bg="gray.50">
      <ColorModeSwitcher justifySelf="flex-end" />
      <Flex d={{ lg: 'flex', base: 'block' }}>
        <Drawer />
        <Home />
      </Flex>
    </Box>
  </ChakraProvider>
);
