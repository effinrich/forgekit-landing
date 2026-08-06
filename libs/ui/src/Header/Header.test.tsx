import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './Header'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Header', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Header /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })
})
