import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface InstallationProps {
  children?: any;
}

const markdown = `## Installation    

You can choose to install all packages and all utilities that come with the packages:

~~~
npm install @bazhe/pagination
or
yarn install @bazhe/pagination
~~~

or you can install each package individually:

### use-pagination

Just the hook, no hoc or wrappers (keep in mind that this also installs @bazhe/paginator):

~~~
npm install @bazhe/use-pagination
or
yarn install @bazhe/use-pagination
~~~

### with-pagination

Just the HOC, no hooks or wrappers (keep in mind that this also installs @bazhe/paginator):

~~~
npm install @bazhe/with-pagination
or
yarn install @bazhe/with-pagination
~~~

### paginator

Just the utility functions for building the pagination object itself:

~~~
npm install @bazhe/paginator
or
yarn install @bazhe/paginator
~~~

`;

// TODO: create markdown wrapper
export const Installation: React.FC<InstallationProps> = ({}) => {
  return (
    <Box id="installation" as="section" w={{ base: '100%', lg: '80%' }}>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <Heading as="h1" size="xl" mb={4} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <Heading as="h2" size="lg" mb={4} {...props} />
          ),
          h3: ({ node, ...props }) => (
            <Heading as="h3" size="md" mb={4} {...props} />
          ),
          h4: ({ node, ...props }) => (
            <Heading as="h4" size="sm" mb={4} {...props} />
          ),
          h5: ({ node, ...props }) => (
            <Heading as="h5" size="xs" mb={4} {...props} />
          ),
          pre: ({ node, ...props }) => (
            <Box
              as="pre"
              py={4}
              shadow="inner"
              bg="gray.100"
              mb={4}
              {...props}
            />
          ),
          p: ({ node, ...props }) => <Text {...props} mb={1} />,
        }}
        children={markdown}
      />
    </Box>
  );
};
