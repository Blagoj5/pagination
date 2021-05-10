export class Paginator {
  perPage: number;
  length: number;
  first_page?: number;
  last_page?: number;

  // Paginator constructor
  //
  // `per_page` is the number of results per page, `length` is the number of
  // pages to display. They default to `25` and `10` respectively.
  constructor(per_page: number, length: number) {
    this.perPage = per_page || 25;
    this.length = length || 10;
  }

  // This is the first page to be displayed as a numbered link.
  getFirstPage = (currentPage: number) => {
    return Math.max(1, currentPage - Math.floor(this.length / 2));
  };

  // This is the first page to be displayed as a numbered link.
  getLastPage = (current_page: number, total_pages: number) => {
    return Math.min(total_pages, current_page + Math.floor(this.length / 2));
  };

  // This is triggered if we're at or near one of the extremes; we won't have
  // enough page links. We need to adjust our bounds accordingly.
  adjustBounds = ({
    current_page,
    total_pages,
  }: {
    current_page: number;
    total_pages: number;
  }) => {
    if (!this.first_page) this.first_page = this.getFirstPage(current_page);
    if (!this.last_page) this.last_page = this.getFirstPage(current_page);

    if (this.last_page - this.first_page + 1 < this.length) {
      if (current_page < total_pages / 2) {
        this.last_page = Math.min(
          total_pages,
          this.last_page + (this.length - (this.last_page - this.first_page))
        );
      } else {
        this.first_page = Math.max(
          1,
          this.first_page - (this.length - (this.last_page - this.first_page))
        );
      }
    }

    return Math.min(total_pages, current_page + Math.floor(this.length / 2));
  };

  // This can be triggered if the user wants an odd number of pages.
  oddNumberOfPages = ({
    current_page,
    total_pages,
  }: {
    current_page: number;
    total_pages: number;
  }) => {
    if (!this.first_page) this.first_page = this.getFirstPage(current_page);
    if (!this.last_page) this.last_page = this.getFirstPage(current_page);

    if (this.last_page - this.first_page + 1 > this.length) {
      // We want to move towards whatever extreme we're closest to at the time.
      if (current_page > total_pages / 2) {
        this.first_page++;
      } else {
        this.last_page--;
      }
    }
  };

  // First result on the page. This, along with the field below, can be used to
  // do "showing x to y of z results" style things.
  getFirstResult = (current_page: number) => {
    const first_result = this.perPage * (current_page - 1);

    return first_result < 0 ? 0 : first_result;
  };

  // Last result on the page.
  getLastResult = ({
    current_page,
    total_results,
  }: {
    current_page: number;
    total_results: number;
  }) => {
    var last_result = this.perPage * current_page - 1;

    if (last_result > Math.max(total_results - 1, 0)) {
      last_result = Math.max(total_results - 1, 0);
    }

    return last_result < 0 ? 0 : last_result;
  };

  // Build an object with all the necessary information for outputting pagination
  // controls.
  //
  // (new Paginator(paginator.build(100, 2)
  build = <T>(total_results: number, current_page?: number, items?: T[]) => {
    // We want the number of pages, rounded up to the nearest page.
    var total_pages = Math.ceil(total_results / this.perPage);

    // Ensure both total_results and current_page are treated as Numbers
    // totalResults = totalResults;
    current_page = current_page || 1;

    // Obviously we can't be on a negative or 0 page.
    if (current_page < 1) {
      current_page = 1;
    }

    // If the user has done something like /page/99999 we want to clamp that back
    // down.
    if (current_page > total_pages) {
      current_page = total_pages;
    }

    this.first_page = this.getFirstPage(current_page);

    this.last_page = this.getLastPage(current_page, total_pages);

    this.adjustBounds({ current_page, total_pages });

    this.oddNumberOfPages({ current_page, total_pages });

    const first_result = this.getFirstResult(current_page);

    const last_result = this.getLastResult({ current_page, total_results });

    // GIMME THAT OBJECT
    return {
      total_pages: total_pages,
      pages: Math.min(this.last_page - this.first_page + 1, total_pages),
      current_page,
      first_page: this.first_page,
      last_page: this.last_page,
      previous_page: current_page - 1,
      next_page: current_page + 1,
      has_previous_page: current_page > 1,
      has_next_page: current_page < total_pages,
      total_results,
      results: Math.min(last_result - first_result + 1, total_results),
      first_result: first_result,
      last_result: last_result,
      items: items ? items.slice(first_result, last_result + 1) : undefined,
      all_items: items ? items : undefined,
      limit: this.perPage,
    };
  };
}
