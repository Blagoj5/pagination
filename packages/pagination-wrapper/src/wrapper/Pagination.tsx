import React from 'react';
import { PaginatorOptions } from '@bazhe/paginator/dist/types/types';
import { usePagination } from '@bazhe/use-pagination';
import { PaginationResults } from '@bazhe/use-pagination/src/types/types';

export type PaginationWrapperProps<I, Props> = {
  paginationOptions?: PaginatorOptions<I>;
  children?: (paginationData: PaginationResults<I & Props>) => any;
  render?: React.ComponentType<PaginationResults<I & Props>>;
  props?: Props;
};

// export const withPagination = <T extends PaginationProps<I>, I>(
export const Pagination = <I extends unknown, Props>({
  children,
  paginationOptions,
  render: Component,
  props,
}: PaginationWrapperProps<I, Props>) => {
  const pagination = usePagination<I>(paginationOptions || {});

  if (children) return children(pagination as any);
  if (Component) return <Component {...(pagination as any)} {...props} />;
};
