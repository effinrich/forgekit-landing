import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Logo } from './Logo'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Logo', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><Logo variant="icon" /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('renders icon variant', () => {
    render(<ChakraProvider><Logo variant="icon" /></ChakraProvider>)
    
    // Variant "icon" renders without error
  })

  it('renders wordmark variant', () => {
    render(<ChakraProvider><Logo variant="wordmark" /></ChakraProvider>)
    
    // Variant "wordmark" renders without error
  })

  it('renders sm size', () => {
    render(<ChakraProvider><Logo size="sm" /></ChakraProvider>)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<ChakraProvider><Logo size="md" /></ChakraProvider>)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<ChakraProvider><Logo size="lg" /></ChakraProvider>)
    
    // Size "lg" renders without error
  })
})
