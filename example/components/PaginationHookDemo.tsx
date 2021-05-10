import * as React from 'react';
import { usePagination } from '@bazhe/use-pagination';

export const PaginationHookDemo: React.FC = ({}) => {
  const { paginationResult, nextPage } = usePagination({
    items: [
      'item-one',
      'item-two',
      'item-three',
      'item-four',
      'item-five',
      'item-six',
      'item-seven',
    ],
    limit: 2,
  });

  return (
    <div
      data-test-id="hook"
      style={{
        padding: '1rem',
        boxShadow: '2px 2px 7px 0 gray',
        width: '30%',
        margin: 'auto',
        background: 'white',
        marginTop: '5rem',
      }}
    >
      <h3>usePagination: </h3>
      <pre>{JSON.stringify(paginationResult, null, 2)}</pre>
      <button onClick={() => nextPage()}>Next</button>
    </div>
  );
};
