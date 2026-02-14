import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders wordmark SVG with accessible title', () => {
    render(<Logo variant="wordmark" />)
    expect(screen.getByTitle('ForgeKit')).toBeInTheDocument()
  })

  it('renders icon-only SVG with accessible title', () => {
    render(<Logo variant="icon" />)
    expect(screen.getByTitle('ForgeKit')).toBeInTheDocument()
  })

  it('accepts all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Logo size={size} />)
      expect(screen.getByTitle('ForgeKit')).toBeInTheDocument()
      unmount()
    })
  })

  it('renders with light colorScheme', () => {
    render(<Logo colorScheme="light" />)
    expect(screen.getByTitle('ForgeKit')).toBeInTheDocument()
  })
})
