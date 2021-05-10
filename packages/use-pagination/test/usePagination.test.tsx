import { PaginatorOptions } from '@bazhe/paginator/src/types/types';
import React from 'react';
import { usePagination } from '../src';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

describe('@bazhe/usePagination', () => {
  function setup(options: PaginatorOptions<number>) {
    const returnVal = {};
    function TestComponent() {
      Object.assign(returnVal, usePagination(options));
      return null;
    }

    render(<TestComponent />);

    return returnVal as ReturnType<typeof usePagination>;
  }

  it('should return expected default cases', () => {
    const {
      result: {
        current: { paginationResult },
      },
    } = renderHook(() => usePagination({}));

    expect(paginationResult).toMatchObject({
      current_page: 0,
      limit: 4,
      total_pages: 0,
      has_previous_page: false,
      has_next_page: false,
      results: 0,
      total_results: 0,
      first_result: 0,
      last_result: 0,
      first_page: 1,
      last_page: 1,
    });

    expect(paginationResult.items).toHaveLength(0);

    expect(paginationResult.all_items).toHaveLength(0);
  });

  describe('for 6 items with limit 2', () => {
    const items = [1, 2, 3, 4, 5, 6];

    it('should set limit to 2, 6, 10, with 6 items', () => {
      [2, 6, 10].forEach(testCase => {
        const { paginationResult } = setup({ items, limit: testCase });

        expect(paginationResult.items).toHaveLength(
          Math.min(testCase, items.length)
        );

        const toMatchObject = {};
        switch (testCase) {
          case 2:
            Object.assign(toMatchObject, {
              first_page: 1,
              last_page: 3,
              total_pages: 3,
              total_results: 6,
              current_page: 1,
              has_previous_page: false,
              has_next_page: true,
            });
            break;
          default:
            // for limit 6 and 10
            Object.assign(toMatchObject, {
              first_page: 1,
              last_page: 1,
              total_results: 6,
              total_pages: 1,
              current_page: 1,
              has_previous_page: false,
              has_next_page: false,
            });
            break;
        }

        expect(paginationResult).toMatchObject(toMatchObject);

        expect(paginationResult.limit).toBe(testCase);

        expect(paginationResult.results <= paginationResult.limit).toBe(true); // results per page shouldn't be bigger then the limit
      });
    });

    it('should change page when nextPage, prevPage method is called', async () => {
      const { result } = renderHook(() => usePagination({ items, limit: 2 }));

      expect(result.current.paginationResult).toMatchObject({
        current_page: 1,
        has_next_page: true,
        has_previous_page: false,
      });

      // Change page to 2
      act(() => {
        result.current.nextPage();
      });
      expect(result.current.paginationResult).toMatchObject({
        current_page: 2,
        has_next_page: true,
        has_previous_page: true,
      });

      // Change page to 3
      act(() => {
        result.current.nextPage();
      });
      expect(result.current.paginationResult).toMatchObject({
        current_page: 3,
        has_next_page: false,
        has_previous_page: true,
      });

      // Change page to 4, since max page is 3 expect 3
      act(() => {
        result.current.nextPage();
      });
      expect(result.current.paginationResult.current_page).toBe(3);

      // Change page back to 2
      act(() => {
        result.current.previousPage();
      });
      expect(result.current.paginationResult).toMatchObject({
        current_page: 2,
        has_next_page: true,
        has_previous_page: true,
      });

      // Change page back to 1
      act(() => {
        result.current.previousPage();
      });
      expect(result.current.paginationResult).toMatchObject({
        current_page: 1,
        has_next_page: true,
        has_previous_page: false,
      });

      // Change page back to 0, it should be 1
      act(() => {
        result.current.previousPage();
      });
      expect(result.current.paginationResult.current_page).toBe(1);
    });

    it('should change page or/and items, when any of the setCurrentPage, setItems or setPageAndItems are called', async () => {
      const { result } = renderHook(() =>
        usePagination({ items: items.concat(items), limit: 3, links: 2 })
      );

      expect(result.current.paginationResult).toMatchObject({
        first_page: 1,
        last_page: 2, // because links is set to 2
        total_pages: 4,
        total_results: 12,
        results: 3, // per page
        current_page: 1,
        has_previous_page: false,
        has_next_page: true,
        next_page: 2,
        previous_page: 0,
      });

      // Change page to 3. When a button is clicked
      act(() => {
        result.current.setCurrentPage(3);
      });

      expect(result.current.paginationResult).toMatchObject({
        first_page: 3,
        last_page: 4, // because links is set to 2
        total_pages: 4,
        total_results: 12,
        results: 3, // per page
        current_page: 3,
        has_previous_page: true,
        has_next_page: true,
        next_page: 4,
        previous_page: 2,
      });

      // Change items
      act(() => {
        result.current.setItems(items.concat(items, items));
      });

      expect(result.current.paginationResult.items).toHaveLength(3);

      expect(result.current.paginationResult.all_items).toHaveLength(
        items.length * 3
      );

      expect(result.current.paginationResult).toMatchObject({
        first_page: 2,
        last_page: 3, // because links is set to 2
        total_pages: 6,
        total_results: 18,
        results: 3, // per page
        current_page: 3,
        has_previous_page: true,
        has_next_page: true,
        next_page: 4,
        previous_page: 2,
      });

      // Change items and page
      act(() => {
        result.current.setPageAndItems({
          items: items.concat(items, items, items),
          currentPage: 6,
        });
      });

      expect(result.current.paginationResult).toMatchObject({
        first_page: 6,
        last_page: 7, // because links is set to 2
        total_pages: 8,
        total_results: 24,
        results: 3, // per page
        current_page: 6,
        has_previous_page: true,
        has_next_page: true,
        next_page: 7,
        previous_page: 5,
      });
    });
  });
});
