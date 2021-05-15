# @bazhe/use-pagination

React hook for handling your pagination. Depends on: [@bazhe/paginator](https://www.npmjs.com/package/@bazhe/paginator)

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
npm install @bazhe/use-pagination
```

yarn

```
yarn add @bazhe/use-pagination
```

## Usage

Typescript usage example in: https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hook-demo.tsx

### Import

```js
import { usePagination } from '@bazhe/use-pagination';
```

### Initialization

**Syntax:** usePagination([paginationOptions](https://blagoj5.github.io/pagination/#pagination-options))  
**Returns:** [PaginationResult](https://blagoj5.github.io/pagination/#pagination-result/return)

```js
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
```

## API

### Parameters

usePagination(paginationOptions) accepts 1 parameter:

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

The result from usePagination hook:

- **paginationResult**

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

- [@bazhe/paginator](https://www.npmjs.com/package/@bazhe/paginator) - The utilities used

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Blagoj Petrov**

## Security

This project doesn’t have any security concerns.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
