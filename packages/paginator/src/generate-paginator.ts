import { Paginator } from './Paginator';
import { PaginatorOptions } from './types/types';

type GeneratorReturnType<T> = Omit<
  ReturnType<Paginator['build']>,
  'items' | 'all_items'
> & {
  items?: T[];
  all_items?: T[];
};

export const generatePaginator = <T>({
  items = [],
  limit = 4,
  currentPage = 1,
  links = 10,
  totalResults,
}: PaginatorOptions<T>): GeneratorReturnType<T> => {
  const paginator = new Paginator(limit, links);

  const paginationResult = paginator.build<T>(
    items?.length || totalResults || 0,
    currentPage,
    items
  );

  return paginationResult;
};
