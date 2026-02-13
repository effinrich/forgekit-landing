import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureCard } from './FeatureCard'

describe('FeatureCard', () => {
  it('renders correctly', () => {
    render(<FeatureCard>Test Content</FeatureCard>)
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<FeatureCard className="custom-class">Content</FeatureCard>)
    
    const element = screen.getByText('Content')
    expect(element).toHaveClass('custom-class')
  })
})
