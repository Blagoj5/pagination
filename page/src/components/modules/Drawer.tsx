import { Box, Heading, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { DrawerItem } from '../elements/Drawer/DrawerItem';

interface DrawerProps {}

// const content = ['playground', 'pagination'];
const content = [
  {
    id: 'playground',
    name: 'Playground',
  },
  {
    id: 'installation',
    name: 'Installation',
    subContent: [
      {
        id: 'pagination',
        name: 'pagination',
      },
      {
        id: 'use-pagination',
        name: 'use-pagination',
      },
      {
        id: 'with-pagination',
        name: 'with-pagination',
      },
      {
        id: 'pagination-wrapper',
        name: 'pagination-wrapper',
      },
      {
        id: 'paginator',
        name: 'paginator',
      },
    ],
  },
  {
    id: 'usage',
    name: 'Usage',
    subContent: [
      {
        id: 'pagination',
        name: 'pagination',
      },
      {
        id: 'use-pagination',
        name: 'use-pagination',
      },
      {
        id: 'with-pagination',
        name: 'with-pagination',
      },
      {
        id: 'pagination-wrapper',
        name: 'pagination-wrapper',
      },
      {
        id: 'paginator',
        name: 'paginator',
      },
    ],
  },
  {
    id: 'api',
    name: 'API',
    subContent: [
      {
        id: 'pagination-options',
        name: 'Pagination Options',
      },
      {
        id: 'pagination-result/return',
        name: 'Pagination Result/Return',
      },
      {
        id: 'paginator',
        name: 'Paginator',
      },
    ],
  },
];

export const Drawer: React.FC<DrawerProps> = () => {
  return (
    <Box
      as="aside"
      minH={{ base: 'auto', lg: '100vh' }}
      overflowX="auto"
      background="white"
      w={{ base: '100%', lg: '280px' }}
      h={{ base: 'fit-content', lg: '100vh' }}
      position={{ base: 'relative', lg: 'sticky' }}
      left={0}
      top={0}
      flex="none"
    >
      <Heading
        as="h4"
        size="md"
        fontWeight="bold"
        p="4"
        bg="primary.main"
        color="white"
        textAlign="center"
      >
        @bazhe/pagination
      </Heading>
      <UnorderedList
        listStyleType="none"
        w="100%"
        ml={0}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        {content.map((item, index) => (
          <DrawerItem key={item.id} item={item} />
        ))}
      </UnorderedList>
    </Box>
  );
};
