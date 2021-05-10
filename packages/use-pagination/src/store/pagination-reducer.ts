// Action creators for pagination reducer/store
import { generatePaginator } from '@bazhe/paginator';
import { PaginatorOptions } from '@bazhe/paginator/src/types/types';

import {
  PaginationReducerActions,
  PaginationReducerState,
} from '../types/types';

export const initialPaginationReducerState = <T>(
  paginationOptions: PaginatorOptions<T>
): PaginationReducerState<T> => ({
  paginationResult: generatePaginator({ items: [], currentPage: 1 }),
  paginationOptions,
});

export const paginationReducer = <ItemType>() => (
  //   state: StateType<(typeof state.items)[0]>,
  state: PaginationReducerState<ItemType>,
  action: PaginationReducerActions<ItemType>
): typeof state => {
  switch (action.type) {
    case 'CHANGE_PAGE_AND_ITEMS':
      return {
        ...state,
        paginationOptions: {
          ...state.paginationOptions,
          currentPage: action.currentPage,
        },
        paginationResult: generatePaginator<ItemType>({
          ...state.paginationOptions,
          items: action.items,
          currentPage: action.currentPage,
        }),
      };
    case 'CHANGE_ITEMS':
      return {
        ...state,
        paginationResult: generatePaginator<ItemType>({
          ...state.paginationOptions,
          items: action.items,
          currentPage: state.paginationResult.current_page,
        }),
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        paginationOptions: {
          ...state.paginationOptions,
          currentPage: action.currentPage,
        },
        paginationResult: generatePaginator<ItemType>({
          ...state.paginationOptions,
          items: state.paginationOptions.items,
          currentPage: Math.max(1, action.currentPage),
        }),
      };
    case 'NEXT_PAGE':
      const updatedPaginator = generatePaginator<ItemType>({
        ...state.paginationOptions,
        currentPage: Math.min(
          state.paginationResult?.total_pages || 1000,
          state.paginationResult.current_page + 1
        ),
      });

      return {
        ...state,
        paginationOptions: {
          ...state.paginationOptions,
          currentPage: updatedPaginator.current_page,
        },
        paginationResult: updatedPaginator,
      };

    case 'PREVIOUS_PAGE':
      const updatedPaginatorPrev = generatePaginator<ItemType>({
        ...state.paginationOptions,
        items: state.paginationOptions.items,
        currentPage: Math.max(1, state.paginationResult.current_page - 1),
      });

      return {
        ...state,
        paginationOptions: {
          ...state.paginationOptions,
          currentPage: updatedPaginatorPrev.current_page,
        },
        paginationResult: updatedPaginatorPrev,
      };

    default:
      return {
        ...state,
        paginationResult: generatePaginator<ItemType>({
          ...state.paginationOptions,
          items: state.paginationOptions.items,
          currentPage: 1,
        }),
      };
  }
};
