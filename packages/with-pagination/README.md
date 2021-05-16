# @bazhe/with-pagination

React Higher-Order Component for handling your pagination

**Playground/Demo:** https://blagoj5.github.io/pagination/#playground  
**Full documentation:** https://blagoj5.github.io/pagination

## Getting Started

### Prerequisites

You need to have react-dom and react above version 16

```
"react": ">=16.0.0",
"react-dom": ">=16.0.0"
```

### Installing

npm

```
npm install @bazhe/with-pagination
```

yarn

```
yarn add @bazhe/with-pagination
```

## Usage

Typescript usage example in: https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hoc-demo.tsx

The example includes the implementation of withPagination for both class based and function based components

### Import

```js
import { withPagination } from '@bazhe/with-pagination';
```

### Initialization

**Syntax:** withPagination(WrappedComponent, [paginationOptions](https://blagoj5.github.io/pagination/#pagination-options))  
**Returns:** [PaginationResult](https://blagoj5.github.io/pagination/#pagination-result/return) as props to the wrapped component

Function based components:

```js
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
```

Class based components:

```jsx
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
```

## API

### Parameters

withPagination(WrappedComponent, paginationOptions) accepts 2 parameters:

#### Wrapper Component

| Name             | Type                    | Description                                                            |
| ---------------- | ----------------------- | ---------------------------------------------------------------------- |
| WrappedComponent | React.ComponentType\<T> | The wrapped component that will recieve the pagination result as props |

#### Pagination Options

| Name         | Type                | Default      | Description                                                                                                              |
| ------------ | ------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| items        | T[] \| undefined    | []           | Initial items for the pagination                                                                                         |
| limit        | number \| undefined | 4            | The limit of items per page                                                                                              |
| currentPage  | number \| undefined | 1            | The current page                                                                                                         |
| links        | number \| undefined | 10           | Links is the number of pages/links/buttons to display. Example: How many buttons you want to show in the pagination bar? |
| totalResults | number \| undefined | items.length | Total results is the maximum number of items. Usually refers to items.length (so there's no need to pass it)             |

<br />

### Pagination Result/Return

Expected pagination props to the wrapped component:

- **paginationResult:**

| Name              | Type                | Description                                                                                                               |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| items             | T[] \| undefined    | The items that will change depending on the pagination (currentPage, limit ...)                                           |
| all_items         | T[] \| undefined    | Initial/All items for the pagination                                                                                      |
| total_pages       | number \| undefined | The total pages for the provided items. Example: 12 items with limit 2 -> 6 total pages                                   |
| pages             | number              | The number of pages between range(first_page, last_page)                                                                  |
| current_page      | number              | Current page                                                                                                              |
| first_page        | number              | First page, depends on the link (buttons/links to display in the pagination bar) and limit (items per page)               |
| last_page         | number              | Last page, depends on the link (buttons/links to display in the pagination bar) and limit (items per page)                |
| previous_page     | number              | Previous page, current_page - 1                                                                                           |
| next_page         | number              | Next page, current_page + 1                                                                                               |
| has_previous_page | boolean             |
| has_next_page     | boolean             |
| total_results     | number              | The length of the initial items                                                                                           |
| results           | number              | Results per page                                                                                                          |
| first_result      | number              | First result is the index of the item that's first for the current page - items[first_result] (depends on link and limit) |
| last_result       | number              | Last result is the index of the item that's last for the current page - items[last_result] (depends on link and limit)    |
| limit             | number              | The limit of items per page                                                                                               |

<br />

- **Pagination handlers for managing state**

| Name            | Type                                                   | Description                                                         |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| setCurrentPage  | (n: number) => void                                    | Function handler for changing the current page                      |
| setItems        | (items: T[]) => void                                   | Function handler for changing the items                             |
| setPageAndItems | (payload: { items: I[]; currentPage: number }) => void | Function handler for changing current page and the items themselves |
| nextPage        | () => void                                             | Function handler for changing to next page                          |
| previousPage    | () => void                                             | Function handler for changing to previous page                      |

## Built With

Depends on:

- [@bazhe/use-pagination](https://www.npmjs.com/package/@bazhe/use-pagination) - Used usePagination hook for the pagination logic
- [@bazhe/paginator](https://www.npmjs.com/package/@bazhe/paginator) - The utilities used

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Blagoj5/pagination/tags).

## Authors

- **Blagoj Petrov**

## Security

This project doesn’t have any security concerns.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
