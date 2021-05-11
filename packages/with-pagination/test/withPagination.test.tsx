import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { withPagination } from '../src/hoc/withPagination';

afterEach(cleanup);

describe('@bazhe/with-pagination', () => {
  it('should recieve pagination props', () => {
    const MockedComponent = jest.fn(() => null);

    const MockComponentWithPagination = withPagination(MockedComponent, {
      limit: 3,
      items: [1, 2, 3, 5, 9, 10],
    });

    render(<MockComponentWithPagination />);

    expect(MockedComponent).toBeCalled();
    expect(
      (MockedComponent.mock.calls[0] as any)[0].paginationResult
    ).toBeDefined();
  });
});
