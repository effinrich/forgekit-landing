import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { GradientText } from './GradientText'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('GradientText', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><GradientText /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('renders primary variant', () => {
    render(<ChakraProvider><GradientText variant="primary" /></ChakraProvider>)
    
    // Variant "primary" renders without error
  })

  it('renders accent variant', () => {
    render(<ChakraProvider><GradientText variant="accent" /></ChakraProvider>)
    
    // Variant "accent" renders without error
  })

  it('renders rainbow variant', () => {
    render(<ChakraProvider><GradientText variant="rainbow" /></ChakraProvider>)
    
    // Variant "rainbow" renders without error
  })
})
