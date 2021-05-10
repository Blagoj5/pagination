import { PaginationReducerActions } from '../types/types';

export const changePageAndItems = <I>(payload: { currentPage: number; items: I[] }): PaginationReducerActions<I> => {
  return {
    type: 'CHANGE_PAGE_AND_ITEMS',
    ...payload,
  };
};

export const changeCurrentPage = (page: number): PaginationReducerActions<any> => {
  return {
    type: 'CHANGE_PAGE',
    currentPage: page,
  };
};

export const changeItems = <I>(items: I[]): PaginationReducerActions<I> => {
  return {
    type: 'CHANGE_ITEMS',
    items,
  };
};

export const nextPage = (): PaginationReducerActions<any> => {
  return {
    type: 'NEXT_PAGE',
  };
};

export const prevPage = (): PaginationReducerActions<any> => {
  return {
    type: 'PREVIOUS_PAGE',
  };
};
