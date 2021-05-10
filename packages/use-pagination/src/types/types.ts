import { generatePaginator } from "@bazhe/paginator";
import { PaginatorOptions } from "@bazhe/paginator/src/types/types";

// Pagination types
export type PaginationReducerState<Item> = {
  // items: Item[];
  paginationResult: Omit<ReturnType<typeof generatePaginator>, 'items' | 'all_items'> & {
    items?: Item[];
    all_items?: Item[];
  };
  // currentPage: number;
  paginationOptions: PaginatorOptions<Item>;
};

export type PaginationReducerActions<Item> =
  | {
      type: 'CHANGE_PAGE_AND_ITEMS';
      items: Item[];
      currentPage: number;
    }
  | ({ type: 'CHANGE_PAGE' } & { currentPage: number })
  | { type: 'NEXT_PAGE' }
  | { type: 'PREVIOUS_PAGE' }
  | ({ type: 'CHANGE_ITEMS' } & { items: Item[] });
