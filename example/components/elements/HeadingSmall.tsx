import * as React from 'react';

interface HeadingSmallProps {
  children: string;
}

export const HeadingSmall: React.FC<HeadingSmallProps> = ({ children }) => {
  return <h2 className="text-lg font-bold mb-2">{children}</h2>;
};
