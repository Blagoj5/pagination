import { Link, LinkProps } from '@chakra-ui/react';
import React from 'react';

interface DrawerLinkProps extends LinkProps {
  id: string;
  name: string;
}

export const DrawerLink: React.FC<DrawerLinkProps> = ({
  id,
  name,
  ...rest
}) => {
  return (
    <Link p={4} cursor="pointer" d="block" href={`#${id}`} {...rest}>
      {name}
    </Link>
  );
};
