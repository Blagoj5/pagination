import React from 'react';
import { USAGE_PREFIX } from '../../constants/id-prefixes';
import { Markdown } from './markdowns/Markdown';

interface InstallationProps {
  children?: any;
}

const markdown = `## Usage    


### pagination

#### Import


~~~jsx
// React.js:
import { usePagination } from '@bazhe/pagination'; // Custom hook
import { Pagination } from '@bazhe/pagination'; // Pagination wrapper
import { withPagination } from '@bazhe/pagination'; // HOC for pagination
// React.js | Vanilla JavaScript:
import { Paginator, generatePaginator } from '@bazhe/paginator'; // Utilities for pagination
~~~

#### Initialization

- [@bazhe/use-pagination](#${USAGE_PREFIX}use-pagination)
- [@bazhe/pagination-wrapper](#${USAGE_PREFIX}pagination-wrapper)
- [@bazhe/with-pagination](#${USAGE_PREFIX}with-pagination)
- [@bazhe/paginator](#${USAGE_PREFIX}paginator)


### use-pagination

#### Import


Typescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hook-demo.tsx](https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hook-demo.tsx)

~~~jsx
import { usePagination } from '@bazhe/use-pagination';
~~~

#### Initialization

**Syntax**: usePagination([paginationOptions](#pagination-options))

**Returns**: [PaginationResult](#pagination-result/return)

~~~jsx
export const PaginationHookDemo: React.FC = () => {
  const {
    paginationResult,
    nextPage,
    previousPage,
    setCurrentPage,
    setItems,
  } = usePagination({
    items: defaultItems,
    limit: 2,
  });

  return (
    <div>
      Pagination data:
      <pre>{JSON.stringify(paginationResult, null, 2)}</pre>
    </div>
  );
};
~~~

### with-pagination

#### Import


Typescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hoc-demo.tsx
](https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hoc-demo.tsx
)

~~~jsx
import { withPagination } from '@bazhe/with-pagination';
~~~

#### Initialization

**Syntax**: withPagination(WrappedComponent, [paginationOptions](#pagination-options))

**Returns**: [PaginationResult](#pagination-result/return) as props to the wrapped component

**Function based components**
~~~jsx
const fakeData = [1, 2, 3]

const FunctionalBasedComponent = ({
  paginationResult,
  nextPage,
  previousPage,
  setItems,
  setCurrentPage,
}: WithPaginationProps<typeof fakeData[0]>) => {
  // pass the typeof the element in this case items have number

  return (
    <div>
        The pagination result:
        <pre>{JSON.stringify(paginationResult)}</pre>
    </div>
    );
};

export const PaginationHocHookDemo = withPagination(FunctionalBasedComponent, {
  items: fakeData,
  limit: 2,
});
~~~

**Class based components**
~~~jsx
const fakeData = [1, 2, 3]

const fakeData = [1, 2, 3]

class ClassBasedComponent extends React.Component<
  WithPaginationProps<typeof fakeData[0]>
> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      nextPage,
      paginationResult,
      previousPage,
      setCurrentPage,
      setItems,
    } = this.props;

  return (
    <div>
        The pagination result:
        <pre>{JSON.stringify(paginationResult)}</pre>
    </div>
    );
  }
}

export const PaginationHocHookDemo = withPagination(ClassBasedComponent, {
  items: fakeData,
  limit: 2,
});
~~~

### pagination-wrapper

#### Import

Typescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-wrapper-demo.tsx](https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-wrapper-demo.tsx)

~~~jsx
import { Pagination } from '@bazhe/pagination-wrapper';
~~~

#### Initialization

~~~jsx
const Playground = (props) => {
    return <pre>{JSON.stringify(props.paginationResult, null, 2)}</pre>
}


const fakeData = [1, 2, 3]

export const PaginationWrapper = () => {
  // With children callback
  return (
    <Pagination paginationOptions={{ items: fakeData, limit: 2 }}>
      {props => <Playground {...props} />}
    </Pagination>
  );

  // Another example with callback
  return (<Pagination paginationOptions={{items: fakeData, limit: 2}}>
    {({nextPage, paginationResult, previousPage, setCurrentPage, setItems }) => {
      // do something with the data from above
      // ...
      return null; // return anything / JSX ... / string etc...
    }
  </Pagination>)

   //   With render prop
  return (
    <Pagination paginationOptions={{ items, limit: 2 }} render={Playground} />
  );
};
~~~

### paginator


Typescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/paginator-demo.tsx](https://github.com/Blagoj5/pagination/blob/main/example/components/paginator-demo.tsx)

#### Import

~~~js
import { Paginator } from '@bazhe/paginator'; // The paginator class itself, provides with a lot of methods for building your pagination object
import { generatePaginator } from '@bazhe/paginator'; // Implements Paginator class and creates the paginator object. generatePaginator is an initializer for the Paginator class (in case you don't want to use it manually)
~~~

#### Initialization

**Syntax**: generatePaginator([paginationOptions](#pagination-options))

**Returns**: [PaginationResult](#pagination-result/return)

~~~js
export const Paginator: React.FC = () => {
  return (
    <div
      style={{
        padding: '1rem',
        boxShadow: '2px 2px 7px 0 gray',
        width: '30%',
        background: 'white',
      }}
    >
      <h3>Generate paginator</h3>
      <pre>
        {JSON.stringify(
          generatePaginator({ items: [], currentPage: 1 }),
          null,
          2
        )}
      </pre>
    </div>
  );
};
~~~

`;

export const Usage: React.FC<InstallationProps> = () => {
  return <Markdown markdown={markdown} prefix={USAGE_PREFIX} />;
};
