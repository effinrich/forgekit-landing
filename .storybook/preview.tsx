import type { Preview } from '@storybook/react';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Import your theme if you have one
import { theme } from '../libs/theme/src/theme';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
