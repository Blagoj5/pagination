import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

interface DrawerProps {}

const content = ['playground', 'installation'];

export const Drawer: React.FC<DrawerProps> = ({}) => {
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
        {content.map(item => (
          <ListItem
            key={item}
            fontSize="lg"
            textTransform="capitalize"
            color="black"
          >
            <Link p={4} cursor="pointer" d="block" href={`#${item}`}>
              {item}
            </Link>
            <Divider />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
