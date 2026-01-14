import React from 'react'
import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import { Provider } from '../src'
import { createSystem, defaultConfig } from '@chakra-ui/react'

const theme = extendTheme({})

const preview: Preview = {
  parameters: {
    actions: { disable: true },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    controls: {
      // expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: React.ComponentType, context: any) => {
      return (
        <Provider forcedTheme={context.globals.theme} enableSystem={false}>
          <Provider value={system}>
            <Story />
          </Provider>
        </Provider>
      )
    },
  ],
}

export default preview

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
//   decorators: [
//     Story => (
//       <ChakraProvider theme={theme}>
//         <Story />
//       </ChakraProvider>
//     ),
//   ],
// }

// export default preview
