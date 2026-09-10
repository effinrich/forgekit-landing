import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Badge } from './Badge'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Badge', () => {
  it('renders correctly', () => {
    render(<ChakraProvider value={defaultSystem}><Badge /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('renders solid variant', () => {
    render(<ChakraProvider value={defaultSystem}><Badge variant="solid" /></ChakraProvider>)
    
    // Variant "solid" renders without error
  })

  it('renders outline variant', () => {
    render(<ChakraProvider value={defaultSystem}><Badge variant="outline" /></ChakraProvider>)
    
    // Variant "outline" renders without error
  })

  it('renders subtle variant', () => {
    render(<ChakraProvider value={defaultSystem}><Badge variant="subtle" /></ChakraProvider>)
    
    // Variant "subtle" renders without error
  })
})
