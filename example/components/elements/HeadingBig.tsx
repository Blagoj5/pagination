import * as React from 'react';

interface HeadingMediumProps {
  children: string;
}

export const HeadingMedium: React.FC<HeadingMediumProps> = ({ children }) => {
  return <h1 className="text-2xl font-bold mb-2">{children}</h1>;
};
