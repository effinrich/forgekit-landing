import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@forgekit-landing/theme'
import { Home } from './Home'
import { describe, it, expect } from 'vitest'

describe('Home', () => {
  it('renders without crashing', () => {
    render(
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    )
    // Check for key content that should be on the page
    expect(screen.getByText(/From Figma to/i)).toBeInTheDocument()
  })

  it('renders the hero section with CTA button', () => {
    render(
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    )
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument()
  })
})
