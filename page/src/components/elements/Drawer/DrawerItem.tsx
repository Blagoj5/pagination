import { Divider, ListItem } from '@chakra-ui/react';
import React from 'react';
import { DrawerAccordion } from './DrawerAccordion';
import { DrawerLink } from './DrawerLink';

interface DrawerItemProps {
  item: {
    id: string;
    name: string;
    subContent?: {
      id: string;
      name: string;
    }[];
  };
}

export const DrawerItem: React.FC<DrawerItemProps> = ({ item }) => {
  let listItemContent = <DrawerLink id={item.id} name={item.name} />;

  if (item.subContent) {
    listItemContent = (
      <DrawerAccordion item={item as Required<DrawerItemProps['item']>} />
    );
  }

  return (
    <ListItem key={item.id} fontSize="lg" color="black">
      {listItemContent}
      <Divider />
    </ListItem>
  );
};
