import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './tailwind.output.css';
import Home from './components/Home';
import * as ReactMarkdown from 'react-markdown';

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.getElementById('root'));
