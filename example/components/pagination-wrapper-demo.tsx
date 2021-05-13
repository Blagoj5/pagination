import { Pagination } from '@bazhe/pagination-wrapper';
import { PaginationResults } from '@bazhe/use-pagination/src/types/types';
import * as React from 'react';
import { PrimaryButton } from './PrimaryButton';

const items = ['a', 'b', 'c'];

const Playground: React.FC<PaginationResults<typeof items[0]>> = ({
  paginationResult,
  nextPage,
  previousPage,
  setCurrentPage,
  setItems,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const removeHandler = (item: string) => {
    if (!paginationResult.all_items) return;

    setItems(paginationResult.all_items?.filter(_item => _item !== item));
  };

  return (
    <div
      data-test-id="hook"
      className="max-h-5xl w-full max-w-2xl shadow-md rounded-lg mb-14 mx-auto"
    >
      <h2 className="text-center bg-blue-500 text-xl text-white p-4 rounded-t-lg">
        Example: Pagination Wrapper (example in:
        components/pagination-wrapper-demo):{' '}
      </h2>
      <div className="bg-white p-8 flex rounded-b-lg">
        <div className="border-r-2 border-gray-100 pr-2">
          <p className="text-lg text-center">Data:</p>
          <pre className="text-sm">
            {JSON.stringify(paginationResult, null, 2)}
          </pre>
        </div>
        <div className="w-full text-center">
          <p className="text-lg mb-4 text-center">Methods:</p>
          <div className="flex justify-evenly mb-4">
            <button
              className="w-32 p-2 bg-blue-500 rounded-md text-white"
              onClick={() => previousPage()}
            >
              Prev Page
            </button>
            <button
              className="w-32 p-2 bg-blue-500 rounded-md text-white"
              onClick={() => nextPage()}
            >
              Next Page
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="current-page">Set current page</label>
            <input
              id="current-page"
              type="number"
              placeholder="Set current page"
              value={paginationResult.current_page}
              onChange={e => setCurrentPage(+e.target.value)}
              className="shadow-lg mt-4 border-2 border-gray-100"
              ref={inputRef}
            />
          </div>
          <div>
            <form
              className="mb-4"
              onSubmit={e => {
                e.preventDefault();
                if (!paginationResult.all_items || !inputRef.current) return;

                setItems([
                  ...paginationResult.all_items,
                  inputRef.current.value,
                ]);
              }}
            >
              <label htmlFor="items">Add/Remove items:</label>
              <input
                ref={inputRef}
                id="items"
                type="text"
                placeholder="Add item"
                className="shadow-lg mt-4 border-2 border-gray-100"
              />
              <PrimaryButton className="py-0">+</PrimaryButton>
            </form>
            <ul className="mx-auto w-5/6 max-h-32 overflow-y-auto shadow-md">
              {paginationResult.all_items?.map((item, index) => (
                <li
                  className="p-1 border-b-2 border-blue-50 mb-2 cursor-pointer transition duration-75 hover:bg-red-300 flex justify-between"
                  key={item + index}
                  onClick={() => removeHandler(item)}
                >
                  <p>{item}</p>
                  <p>-</p>
                </li>
              ))}
            </ul>
            {/* Here add the list of items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PaginationWrapper = () => {
  // With children callback
  return (
    <Pagination paginationOptions={{ items, limit: 2 }}>
      {props => <Playground {...props} />}
    </Pagination>
  );

  // Another example
  // OR
  // return (<Pagination paginationOptions={{items, limit: 2}}>
  //   {({nextPage, paginationResult, previousPage, setCurrentPage, setItems }) => {
  //     // do something with the data from above
  //     // ...
  //     // return anything / JSX ... / string etc...
  //   }
  // </Pagination>)

  // With render prop
  // OR
  // return (
  //   <Pagination paginationOptions={{ items, limit: 2 }} render={Playground} />
  // );
};
