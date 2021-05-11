import * as React from 'react';

interface CodeProps {
  children: any;
}

export const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <div className="shadow-inner bg-blue-50 p-4">
      <code>{children}</code>
    </div>
  );
};
