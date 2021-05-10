export type PaginatorOptions<T> = {
  items?: T[];
  /** limit/per_page is the number of results per page */
  limit?: number;
  /** Default: 1 */
  currentPage?: number;
  /** links/length is the number of pages/links/buttons to display. They default to `10` respectively. */
  links?: number;
  /** Defaults: item.length or 1  */
  totalResults?: number;
}