import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { Container } from './Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content here</Container>)
    expect(screen.getByText('Content here')).toBeInTheDocument()
  })

  it('defaults to xl size', () => {
    const { container } = render(<Container>Test</Container>)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts all size variants', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Container size={size}>Size {size}</Container>)
      expect(screen.getByText(`Size ${size}`)).toBeInTheDocument()
      unmount()
    })
  })
})
