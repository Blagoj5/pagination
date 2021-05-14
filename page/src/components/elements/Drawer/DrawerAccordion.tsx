import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import {
  INSTALLATION_PREFIX,
  USAGE_PREFIX,
} from '../../../constants/id-prefixes';
import { DrawerLink } from './DrawerLink';

interface DrawerAccordionProps {
  item: {
    id: string;
    name: string;
    subContent: {
      id: string;
      name: string;
    }[];
  };
}

export const DrawerAccordion: React.FC<DrawerAccordionProps> = ({ item }) => {
  let prefix = '';
  switch (item.id) {
    case 'installation':
      prefix = INSTALLATION_PREFIX;
      break;
    case 'usage':
      prefix = USAGE_PREFIX;
      break;
    default:
      prefix = '';
      break;
  }

  return (
    <Accordion key={item.id} allowMultiple>
      <AccordionItem border="none">
        <h2>
          <AccordionButton _focus={{}}>
            <Box
              fontSize="lg"
              flex="1"
              textAlign={{ lg: 'left', base: 'center' }}
              py={2}
            >
              {item.name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} shadow="inner" bg="#edeef1">
          {item.subContent.map(navItem => (
            <DrawerLink
              key={navItem.id}
              name={navItem.name}
              id={prefix + navItem.id}
              py={2}
              fontSize="md"
            >
              {navItem}
            </DrawerLink>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
