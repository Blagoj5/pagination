import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PaginatorDemo } from './components/PaginatorDemo';
import { PaginationHookDemo } from './components/PaginationHookDemo';

const App = () => {
  return (
    <div style={{background: '#efe8e8', minHeight: '100vh', padding: '4rem'}}>
      <PaginatorDemo />
      <PaginationHookDemo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
