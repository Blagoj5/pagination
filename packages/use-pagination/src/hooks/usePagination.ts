import { Reducer, useEffect, useReducer } from 'react';
import {
  changeCurrentPage,
  changeItems,
  changePageAndItems,
  nextPage,
  prevPage,
} from '../store/pagination-actions';
import {
  initialPaginationReducerState,
  paginationReducer,
} from '../store/pagination-reducer';
import {
  PaginationReducerActions,
  PaginationReducerState,
} from '../types/types';
import { PaginatorOptions } from '@bazhe/paginator/dist/types/types';

export const usePagination = <I>(paginationOptions: PaginatorOptions<I>) => {
  const [{ paginationResult }, dispatch] = useReducer<
    Reducer<PaginationReducerState<I>, PaginationReducerActions<I>>
  >(
    paginationReducer<I>(), // returns the reducer itself with the speciefied generic type
    initialPaginationReducerState<I>(paginationOptions)
  );

  useEffect(() => {
    // Only initially called
    if (
      paginationResult?.items?.length === 0 &&
      paginationOptions.items &&
      paginationOptions.items.length !== 0
    ) {
      setItems(paginationOptions.items);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationOptions.items, paginationResult.items]);

  const setItems = (_items: I[]) => dispatch(changeItems(_items));

  return {
    setCurrentPage: (n: number) => dispatch(changeCurrentPage(n)),
    setItems,
    setPageAndItems: (payload: { items: I[]; currentPage: number }) =>
      dispatch(changePageAndItems(payload)),
    nextPage: () => dispatch(nextPage()),
    previousPage: () => dispatch(prevPage()),
    paginationResult,
  };
};
