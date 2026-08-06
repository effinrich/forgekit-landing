import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Badge } from './Badge'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Badge', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Badge /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('renders solid variant', () => {
    render(<ChakraProvider><Badge variant="solid" /></ChakraProvider>)
    
    // Variant "solid" renders without error
  })

  it('renders outline variant', () => {
    render(<ChakraProvider><Badge variant="outline" /></ChakraProvider>)
    
    // Variant "outline" renders without error
  })

  it('renders subtle variant', () => {
    render(<ChakraProvider><Badge variant="subtle" /></ChakraProvider>)
    
    // Variant "subtle" renders without error
  })
})
