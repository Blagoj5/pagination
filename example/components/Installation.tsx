import * as React from 'react';
import ReactMarkdown from 'react-mark';
import { Code } from './elements/Code';
import { HeadingMedium } from './elements/HeadingBig';
import { HeadingSmall } from './elements/HeadingSmall';

interface InstallationProps {
  children?: any;
}

export const Installation: React.FC<InstallationProps> = ({}) => {
  const commonClasses = 'mb-4';
  return (
    <div id="installation" className="max-w-screen-xl mx-auto">
      <div className={commonClasses}>
        <HeadingMedium>Installation</HeadingMedium>
        You can choose to install all packages and all utilities that come with
        the packages:
        <br />
        <br />
        <Code>
          npm install @bazhe/pagination
          <br />
          or
          <br />
          yarn install @bazhe/pagination
        </Code>
      </div>
      <HeadingSmall>use-pagination</HeadingSmall>
      Just the hook, no hoc or wrappers (keep in mind that this also installs
      @bazhe/paginator):
      <Code>
        npm install @bazhe/use-pagination
        <br />
        or
        <br />
        yarn install @bazhe/use-pagination
      </Code>
      <HeadingSmall>with-pagination</HeadingSmall>
      Just the HOC, no hooks or wrappers (keep in mind that this also installs
      @bazhe/paginator):
      <Code>
        npm install @bazhe/with-pagination
        <br />
        or
        <br />
        yarn install @bazhe/with-pagination
      </Code>
      <HeadingSmall>paginator</HeadingSmall>
      Just the utility functions for building the pagination object itself:
      <Code>
        npm install @bazhe/paginator
        <br />
        or
        <br />
        yarn install @bazhe/paginator
      </Code>
    </div>
  );
};
