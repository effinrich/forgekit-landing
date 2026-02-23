import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { GradientText } from './GradientText'

describe('GradientText', () => {
  it('renders children text', () => {
    render(<GradientText>Hello</GradientText>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders as a span by default', () => {
    const { container } = render(<GradientText>Test</GradientText>)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('accepts all variant values', () => {
    const variants = ['primary', 'accent', 'rainbow'] as const
    variants.forEach((variant) => {
      const { unmount } = render(<GradientText variant={variant}>{variant}</GradientText>)
      expect(screen.getByText(variant)).toBeInTheDocument()
      unmount()
    })
  })
})
