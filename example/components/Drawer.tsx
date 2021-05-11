import * as React from 'react';

interface DrawerProps {
  children?: any;
}

export const Drawer: React.FC<DrawerProps> = ({}) => {
  return (
    <div className="w-4/12 max-w-xs sticky left-0 top-0 h-screen overflow-auto bg-white">
      <h3 className="font-bold p-4 bg-blue-500 text-white">
        @bazhe/pagination
      </h3>
    </div>
  );
};
