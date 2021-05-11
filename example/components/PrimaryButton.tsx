import * as React from 'react';

interface PrimaryButtonProps {
  className?: string;
  children: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className = '',
  children,
}) => {
  return (
    <button className={'bg-blue-500 p-2 text-white ' + className}>
      {children}
    </button>
  );
};
