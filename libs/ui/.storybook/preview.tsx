import React from "react"
import type { Preview } from "@storybook/react"
import { ChakraProvider /*, extendTheme*/ } from "@chakra-ui/react"

import { theme } from "../src/theme/theme"

// const theme = extendTheme({
//   // Your theme customizations here
// });

const preview: Preview = {
  parameters: {
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
}

export default preview
