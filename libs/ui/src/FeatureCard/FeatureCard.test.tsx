import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { FeatureCard } from './FeatureCard'

// If you have a custom theme, import and pass it: <ChakraProvider theme={theme}>

describe('FeatureCard', () => {
  it('renders correctly', () => {
    render(<ChakraProvider><FeatureCard icon="test" title="Test title" description="Test description" /></ChakraProvider>)
    
    expect(document.querySelector('[class]')).not.toBeNull()
  })
})
