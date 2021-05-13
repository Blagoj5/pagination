# @bazhe/with-pagination

React Wrapper Component for handling your pagination

<!-- TODO: Full documentation on: link#use-pagination -->

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
npm install @bazhe/pagination-wrapper
```

yarn

```
yarn add @bazhe/pagination-wrapper
```

## Usage

Typescript usage example in: https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-wrapper-demo.tsx

### Import

```js
import { Pagination } from '@bazhe/pagination-wrapper';
```

### Initialization

```js

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

```

## API

### Props

| Name              | Type                                                             | Description                                                                                                                                                                                           |
| ----------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| render            | React.ComponentType\<PaginationResults\<I & Props>>              | The wrapped component that will be rendered with the pagination result passed as props                                                                                                                |
| children          | children?: (paginationData: PaginationResults<I & Props>) => any | The wrapped component that will be rendered with the pagination result passed to props                                                                                                                |
| props             | any                                                              | Parent props you want to pass when you are using render method for getting pagination result. It **merges existing props with pagination result** and passes them to the component provided in render |
| paginationOptions | PaginatorOptions\<I>                                             | Options for handling the pagination logic                                                                                                                                                             |

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

The pagination result passed to the children callback or the pagination props passed to the wrapped component (when using render prop):

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
| fi-st_result      | number              | First result is the index of the item that's first for the current page - items[first_result] (depends on link and limit) |
| last-result       | number              | Last result is the index of the item that's last for the current page - items[last_result] (depends on link and limit)    |
| limit             | number              | The limit of items per page                                                                                               |

<br />

#### Methods for handling state:

- **setCurrentPage**: (n: number) => void (function for changing the current page)

- **setItems**: (items: T[]) => void (function for changing items),
- **setPageAndItems**: (payload: { items: I[]; currentPage: number }) => void (function for changing current page and the items themselves)
- **nextPage**: () => void (function for changing to next page),
- **previousPage**: () => dispatch(function for changing to the previous page),

## Built With

Depends on:

- [@bazhe/use-pagination](https://www.npmjs.com/package/@bazhe/use-pagination) - Used usePagination hook for the pagination logic
- [@bazhe/paginator](https://www.npmjs.com/package/@bazhe/paginator) - The utilities used

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Blagoj Petrov**

## Security

This project doesn’t have any security concerns.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
