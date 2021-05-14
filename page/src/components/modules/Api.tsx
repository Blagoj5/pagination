import React from 'react';
import { Markdown } from './markdowns/Markdown';

interface InstallationProps {
  children?: any;
}

const markdown = `## API    


### Pagination Options


| Name         | Type                | Default      | Description                                                                                                              |
| ------------ | ------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| items        | T[] \\| undefined    | []           | Initial items for the pagination                                                                                         |
| limit        | number \\| undefined | 4            | The limit of items per page                                                                                              |
| currentPage  | number \\| undefined | 1            | The current page                                                                                                         |
| links        | number \\| undefined | 10           | Links is the number of pages/links/buttons to display. Example: How many buttons you want to show in the pagination bar? |
| totalResults | number \\| undefined | items.length | Total results is the maximum number of items. Usually refers to items.length (so there's no need to pass it)             |

### Pagination Result/Return

The results from the pagination are inside of the paginationResult object

- **paginationResult**

| Name              | Type                | Description                                                                                                               |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| items             | T[] \\| undefined    | The items that will change depending on the pagination (currentPage, limit ...)                                           |
| all_items         | T[] \\| undefined    | Initial/All items for the pagination                                                                                      |
| total_pages       | number \\| undefined | The total pages for the provided items. Example: 12 items with limit 2 -> 6 total pages                                   |
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

- **Pagination handlers for managing state**

| Name            | Type                                                   | Description                                                         |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| setCurrentPage  | (n: number) => void                                    | Function handler for changing the current page                      |
| setItems        | (items: T[]) => void                                   | Function handler for changing the items                             |
| setPageAndItems | (payload: { items: I[]; currentPage: number }) => void | Function handler for changing current page and the items themselves |
| nextPage        | () => void                                             | Function handler for changing to next page                          |
| previousPage    | () => void                                             | Function handler for changing to previous page                      |

### Paginator

The main class that is responsible for the pagination logic:

In the table bellow you can see some of the Paginator class methods and their usage

| Name                                        | Type                                                                                | Description                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| constructor(perPage: number, links: number) |                                                                                     | The constructor that creates paginator object. Example: new Paginator(4, 10)                    |
| build                                       | \\<T>(total_results: number, current_page?: number, items?: T[]) => [PaginationResult](#pagination-result/return) | The main method that returns the fully expected pagination result                              |
| getFirstPage                                | (currentPage: number) => number                                                     | Gets first page, depending on the number of links (ex. buttons displayed in the pagination bar) |
| getLastPage                                 | (currentPage: number) => number                                                     | Gets last page, depending on the number of links (ex. buttons displayed in the pagination bar)  |
| getFirstResult                              | (currentPage: number) => number                                                     | Gets first result/index, depending on the limit/perPage and current page                        |
| getLastResult                               | (currentPage: number) => number                                                     | Gets last result/index, depending on the limit/perPage and current page                      
`;

export const Api: React.FC<InstallationProps> = () => {
  return <Markdown markdown={markdown} />;
};
