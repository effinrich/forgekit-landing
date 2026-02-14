import React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme'

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

function renderWithChakra(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: Wrapper, ...options })
}

export { renderWithChakra as render }
export { screen, within, waitFor } from '@testing-library/react'
