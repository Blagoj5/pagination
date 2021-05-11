import * as React from 'react';
import { generatePaginator } from '@bazhe/paginator';

export const PaginatorDemo: React.FC = ({}) => {
  return (
    <div
      style={{
        padding: '1rem',
        boxShadow: '2px 2px 7px 0 gray',
        width: '30%',
        background: 'white',
      }}
    >
      <h3>Generate paginator</h3>
      <pre>
        {JSON.stringify(
          generatePaginator({ items: [], currentPage: 1 }),
          null,
          2
        )}
      </pre>
    </div>
  );
};
