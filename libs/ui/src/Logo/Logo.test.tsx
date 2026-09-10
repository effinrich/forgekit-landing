import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Logo } from './Logo'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('Logo', () => {
  it('renders correctly', () => {
    render(<ChakraProvider value={defaultSystem}><Logo variant="icon" /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })

  it('renders icon variant', () => {
    render(<ChakraProvider value={defaultSystem}><Logo variant="icon" /></ChakraProvider>)
    
    // Variant "icon" renders without error
  })

  it('renders wordmark variant', () => {
    render(<ChakraProvider value={defaultSystem}><Logo variant="wordmark" /></ChakraProvider>)
    
    // Variant "wordmark" renders without error
  })

  it('renders sm size', () => {
    render(<ChakraProvider value={defaultSystem}><Logo size="sm" /></ChakraProvider>)
    
    // Size "sm" renders without error
  })

  it('renders md size', () => {
    render(<ChakraProvider value={defaultSystem}><Logo size="md" /></ChakraProvider>)
    
    // Size "md" renders without error
  })

  it('renders lg size', () => {
    render(<ChakraProvider value={defaultSystem}><Logo size="lg" /></ChakraProvider>)
    
    // Size "lg" renders without error
  })
})
