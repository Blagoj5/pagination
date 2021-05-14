import { usePagination } from '@bazhe/use-pagination';
import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Divider,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/layout';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';
import { PrimaryButton } from '../elements/PrimaryButton';

interface PlaygroundProps {}

const defaultItems = [
  'item-one',
  'item-two',
  'item-three',
  'item-four',
  'item-five',
  'item-six',
  'item-seven',
];

export const Playground: React.FC<PlaygroundProps> = () => {
  const {
    paginationResult,
    nextPage,
    previousPage,
    setCurrentPage,
    setItems,
  } = usePagination({
    items: defaultItems,
    limit: 2,
  });
  const inputRef = React.useRef<HTMLInputElement>(null);

  const removeHandler = (item: string) => {
    if (!paginationResult.all_items) return;

    setItems(paginationResult.all_items?.filter(_item => _item !== item));
  };

  return (
    <Box
      id="playground"
      w="90%"
      maxW="900px"
      shadow="xl"
      rounded="2xl"
      alignItems="stretch"
      maxH={{ base: '100vh', md: 'fit-content' }}
      overflowY="auto"
    >
      <Heading
        as="h2"
        bg="primary.main"
        color="white"
        size="lg"
        p={4}
        roundedTop="2xl"
        textAlign="center"
      >
        Pagination data and methods:{' '}
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        roundedBottom="2xl"
        p={4}
        justify="space-between"
      >
        <VStack w="100%" spacing={4} m={2}>
          <Heading as="h4" size="md" textAlign="center">
            Methods:
          </Heading>
          <Divider />
          <Flex w="100%" justify="center" mt={0}>
            <PrimaryButton
              onClick={() => previousPage()}
              mr={8}
              isDisabled={!paginationResult.has_previous_page}
            >
              Prev Page
            </PrimaryButton>
            <PrimaryButton
              onClick={() => nextPage()}
              isDisabled={!paginationResult.has_next_page}
            >
              Next Page
            </PrimaryButton>
          </Flex>
          <Divider />
          <div className="mb-4">
            <FormLabel htmlFor="current-page">Set current page</FormLabel>
            <NumberInput
              id="current-page"
              placeholder="Set current page"
              value={paginationResult.current_page}
              onChange={(_, value) => setCurrentPage(value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <Divider />
          <Box w="100%">
            <Box as="form" className="mb-4" mb={4}>
              <FormLabel htmlFor="items">Add/Remove items:</FormLabel>
              <Flex>
                <Input
                  ref={inputRef}
                  id="items"
                  type="text"
                  placeholder="Add item"
                  roundedRight="none"
                />
                <PrimaryButton
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    if (!paginationResult.all_items || !inputRef.current)
                      return;

                    setItems([
                      ...paginationResult.all_items,
                      inputRef.current.value,
                    ]);
                  }}
                  roundedLeft="none"
                >
                  +
                </PrimaryButton>
              </Flex>
            </Box>
            <UnorderedList
              className="mx-auto w-5/6 max-h-32 overflow-y-auto shadow-md"
              listStyleType="none"
              shadow="inner"
              border="1px solid"
              borderColor="gray.100"
              ml={0}
              maxH="250px"
              overflowY="auto"
            >
              {paginationResult.all_items?.map((item, index) => (
                <ListItem
                  p={4}
                  key={item + index}
                  onClick={() => removeHandler(item)}
                  textAlign="center"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  cursor="pointer"
                  transition="all 0.2s"
                  css={`
                    :hover {
                      position: relative;
                      :before {
                        position: absolute;
                        content: 'Remove';
                        background: #fda1a1;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                      }
                    }
                  `}
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </VStack>
        <Divider orientation="vertical" height="auto" />
        <Box pl={3}>
          <Heading as="h4" size="md" textAlign="center">
            Data:
          </Heading>
          <pre style={{ fontSize: '14px' }}>
            {JSON.stringify(paginationResult, null, 2)}
          </pre>
        </Box>
      </Flex>
    </Box>
  );
};
