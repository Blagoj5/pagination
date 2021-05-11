import { PaginatorOptions } from '@bazhe/paginator/dist/types/types';
import React from 'react';
import { usePagination } from '@bazhe/use-pagination';
import { Subtract } from 'utility-types';
import { PaginationResults } from '@bazhe/use-pagination/src/types/types';

export type WithPaginationProps<I> = PaginationResults<I>;

// export const withPagination = <T extends PaginationProps<I>, I>(
export const withPagination = <T extends WithPaginationProps<I>, I>(
  // WrappedComponent: React.FC<any>,
  WrappedComponent: React.ComponentType<T>,
  paginationOptions?: PaginatorOptions<I>
): React.FC<Subtract<T, WithPaginationProps<I>>> => props => {
  const pagination = usePagination<I>(paginationOptions || {});

  return <WrappedComponent {...(props as T)} {...pagination} />;
};
