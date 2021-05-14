import React from 'react';
import { INSTALLATION_PREFIX } from '../../constants/id-prefixes';
import { Markdown } from './markdowns/Markdown';

interface InstallationProps {
  children?: any;
}

const markdown = `## Installation    

### pagination

You can choose to install all pagination packages and all utilities that come with the packages (bundled in one):

~~~bash
npm install @bazhe/pagination
or
yarn install @bazhe/pagination
~~~

**or you can install each package individually:**


### use-pagination

React hook for handling your pagination. Depends on: [@bazhe/paginator](#${INSTALLATION_PREFIX}paginator)

~~~bash
npm install @bazhe/use-pagination
or
yarn install @bazhe/use-pagination
~~~

### with-pagination

React Higher-Order Component for handling your pagination. Depends on: [@bazhe/paginator](#${INSTALLATION_PREFIX}paginator)

~~~bash
npm install @bazhe/with-pagination
or
yarn install @bazhe/with-pagination
~~~

### pagination-wrapper

React Wrapper Component for handling your pagination

~~~bash
npm install @bazhe/pagination-wrapper
or
yarn install @bazhe/pagination-wrapper
~~~

### paginator

Utilities for handling your pagination. Used in: [@bazhe/use-pagination](#${INSTALLATION_PREFIX}use-pagination), [@bazhe/with-pagination](#${INSTALLATION_PREFIX}with-pagination), [@bazhe/pagination-wrapper](#${INSTALLATION_PREFIX}pagination-wrapper)

~~~bash
npm install @bazhe/paginator
or
yarn install @bazhe/paginator
~~~

`;

export const Installation: React.FC<InstallationProps> = () => {
  return <Markdown markdown={markdown} prefix={INSTALLATION_PREFIX} />;
};
