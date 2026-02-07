import type { Preview } from '@storybook/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';

// Import your theme if you have one
// import { theme } from '../src/theme';

const theme = extendTheme({
  // Your theme customizations here
});

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
