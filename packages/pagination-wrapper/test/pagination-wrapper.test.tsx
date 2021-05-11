import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Pagination } from '../src';

afterEach(cleanup);

describe('@bazhe/pagination-wrapper', () => {
  it('should pass props to children callback', () => {
    // const MockedComponent = jest.fn(() => <div>Test</div>);
    const MockedComponent = jest.fn((_: any) => null);

    render(
      <Pagination paginationOptions={{ limit: 2, items: [1, 2, 3] }}>
        {props => MockedComponent(props)}
      </Pagination>
    );

    expect(MockedComponent).toBeCalled();
    expect(
      (MockedComponent.mock.calls[0] as any)[0].paginationResult
    ).toBeDefined();
  });

  it('should render the element with newly passed props', () => {
    // const MockedComponent = jest.fn(() => <div>Test</div>);
    const MockedComponent = jest.fn(() => null);

    render(
      <Pagination
        paginationOptions={{ limit: 2, items: [1, 2, 3] }}
        render={MockedComponent}
      />
    );

    expect(MockedComponent).toBeCalled();
    expect(
      (MockedComponent.mock.calls[0] as any)[0].paginationResult
    ).toBeDefined();
  });
});
