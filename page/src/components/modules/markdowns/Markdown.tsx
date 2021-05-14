import {
  Box,
  Heading,
  Link,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';

interface MarkdownProps {
  markdown: string;
  id?: string;
  prefix?: string;
}

export const Markdown: React.FC<MarkdownProps> = ({
  markdown,
  id,
  prefix = '',
}) => {
  return (
    <Box id={id} as="section" w={{ base: '100%', lg: '80%' }}>
      <ReactMarkdown
        plugins={[gfm]}
        components={{
          h1: ({ node, ...props }) => (
            <Heading as="h1" size="xl" mb={4} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <Heading
              id={(node.children[0].value as string).toLowerCase()}
              as="h2"
              size="lg"
              my={4}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <Heading
              id={
                (prefix + node.children[0].value)
                  .split(' ')
                  .join('-')
                  .toLowerCase() as string
              }
              as="h3"
              size="md"
              my={4}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <Heading as="h4" size="sm" my={4} {...props} />
          ),
          h5: ({ node, ...props }) => (
            <Heading as="h5" size="xs" my={4} {...props} />
          ),
          code: ({ node, className, inline, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={dracula}
                language={match[0].split('-')[1]} // language-javascript, get the javascript part only
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
              />
            ) : (
              <Box
                as="pre"
                py={4}
                px={2}
                shadow="inner"
                bg="gray.100"
                mb={4}
                className={className}
                children={children}
                {...props}
              />
            );
          },
          p: ({ node, ...props }) => <Text {...props} mb={1} />,
          a: ({ node, ...props }) => <Link {...props} color="blue.500" />,
          ul: ({ node, ordered, ...props }) => (
            <UnorderedList listStylePos="inside" {...props} />
          ),
          li: ({ node, ordered, ...props }) => <ListItem {...props} />,
          // Table
          table: ({ node, ...props }) => (
            <Table variant="simple" {...props} shadow="lg" mt={2} mb={4} />
          ),
          thead: ({ node, ...props }) => (
            <Thead
              bg="primary.main"
              // variant="simple"
              {...props}
            />
          ),
          tbody: ({ node, ...props }) => (
            <Tbody
              // variant="simple"
              {...props}
            />
          ),
          tr: ({ node, ...props }) => (
            <Tr
              // variant="simple"
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <Th
              color="white"
              // variant="simple"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <Td
              // variant="simple"
              {...props}
            />
          ),
        }}
        children={markdown}
      />
    </Box>
  );
};
