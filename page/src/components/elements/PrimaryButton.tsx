import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

interface PrimaryButtonProps extends ButtonProps {
  onClick: (...args: any) => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button
      bg="primary.main"
      onClick={onClick}
      color="white"
      _hover={{
        bg: 'blue.600',
      }}
      _focus={{}}
      _active={{}}
      {...rest}
    >
      {children}
    </Button>
  );
};
