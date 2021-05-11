import * as React from 'react';
import { Drawer } from './Drawer';
import { PaginationHookDemo } from './pagination-hook-demo';
import { Installation } from './Installation';
import {
  PaginationHocClassComponentDemo,
  PaginationHocHookDemo,
} from './pagination-hoc-demo';
import { PaginationWrapper as PaginationWrapperDemo } from './pagination-wrapper-demo';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      <Drawer />
      <div className="w-full p-4 flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Package: @bazhe/pagination playground
          </h1>
          <p>
            Example code at:{' '}
            <a
              href="https://github.com/Blagoj5/pagination/tree/main/example"
              className="hover:text-blue-400"
            >
              https://github.com/Blagoj5/pagination/tree/main/example
            </a>
          </p>
        </div>
        <PaginationHookDemo />
        <PaginationHocHookDemo />
        <PaginationHocClassComponentDemo />
        <PaginationWrapperDemo />
      </div>
    </div>
  );
};

export default Home;
