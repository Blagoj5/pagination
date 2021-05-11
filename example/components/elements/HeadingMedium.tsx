import * as React from 'react';

interface HeadingBigProps {
  children: string;
}

export const HeadingBig: React.FC<HeadingBigProps> = ({ children }) => {
  return <h2 className="text-xl">{children}</h2>;
};
