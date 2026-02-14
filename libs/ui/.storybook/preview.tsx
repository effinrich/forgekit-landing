import React from "react"
import type { Preview } from "@storybook/react"
import { ChakraProvider } from "@chakra-ui/react"

import { system } from "../src/theme/theme"

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
      <ChakraProvider value={system}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview
