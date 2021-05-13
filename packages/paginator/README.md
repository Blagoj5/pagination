# @bazhe/paginator

<!-- TODO: Add link to @bazhe/use-pagination, etc etc -->

@bazhe/paginator provides utilities for handling your pagination. Used in: @bazhe/use-pagination, @bazhe/with-pagination, @bazhe/with-wrapper

<!-- TODO: Full documentation on: link#use-pagination -->

## Getting Started

These instructions will get you started on using paginator utilities

### Installing

npm

```
npm install @bazhe/paginator
```

yarn

```
yarn add @bazhe/paginator
```

## Usage

Typescript usage example in: https://github.com/Blagoj5/pagination/blob/main/example/components/paginator-demo.tsx

### Import

```js
import { Paginator } from '@bazhe/paginator'; // The paginator class itself, provides with a lot of methods for building your pagination object
import { generatePaginator } from '@bazhe/paginator'; // Implements Paginator class and creates the paginator object. generatePaginator is an initializer for the Paginator class (in case you don't want to use it manually)
```

### Initialization

**generatePaginator** accepts paginationOptions as argument

```js
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
```

## API

API for:

- generatePaginator(**paginationOptions**)
- new Paginator(perPage, links)

### Parameters

#### generatePaginator(**paginationOptions**):

<br/>

**Pagination Options**

| Name         | Type                | Default      | Description                                                                                                              |
| ------------ | ------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| items        | T[] \| undefined    | []           | Initial items for the pagination                                                                                         |
| limit        | number \| undefined | 4            | The limit of items per page                                                                                              |
| currentPage  | number \| undefined | 1            | The current page                                                                                                         |
| links        | number \| undefined | 10           | Links is the number of pages/links/buttons to display. Example: How many buttons you want to show in the pagination bar? |
| totalResults | number \| undefined | items.length | Total results is the maximum number of items. Usually refers to items.length (so there's no need to pass it)             |

<br />

#### Paginator

| Name                                        | Type                                                                                | Description                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| constructor(perPage: number, links: number) |                                                                                     | The constructor that creates paginator object. Example: new Paginator(4, 10)                    |
| build                                       | \<T>(total_results: number, current_page?: number, items?: T[]) => PaginationResult | The main methods that returns the fully expected pagination result                              |
| getFirstPage                                | (currentPage: number) => number                                                     | Gets first page, depending on the number of links (ex. buttons displayed in the pagination bar) |
| getLastPage                                 | (currentPage: number) => number                                                     | Gets last page, depending on the number of links (ex. buttons displayed in the pagination bar)  |
| getFirstResult                              | (currentPage: number) => number                                                     | Gets first result/index, depending on the limit/perPage and current page                        |
| getLastResult                               | (currentPage: number) => number                                                     | Gets last result/index, depending on the limit/perPage and current page                         |

### Pagination Result/Return

The result from generatePaginator or Paginator.build:

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

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Blagoj Petrov**

## Security

This project doesn’t have any security concerns.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
