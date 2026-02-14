import { describe, it, expect } from 'vitest'
import { render, screen } from '../test-utils'
import { Footer } from './Footer'

const columns = [
  {
    title: 'Product',
    links: [{ label: 'Features', href: '#features' }],
  },
]

describe('Footer', () => {
  it('renders logo and tagline', () => {
    render(<Footer logo="ForgeKit" tagline="Ship faster." columns={columns} />)
    expect(screen.getByText('ForgeKit')).toBeInTheDocument()
    expect(screen.getByText('Ship faster.')).toBeInTheDocument()
  })

  it('renders column titles and links', () => {
    render(<Footer logo="FK" columns={columns} />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders social links when provided', () => {
    render(
      <Footer
        logo="FK"
        columns={columns}
        socialLinks={[{ icon: <span>𝕏</span>, href: 'https://twitter.com', label: 'Twitter' }]}
      />
    )
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders custom copyright text', () => {
    render(<Footer logo="FK" columns={columns} copyright="© 2026 Test" />)
    expect(screen.getByText('© 2026 Test')).toBeInTheDocument()
  })

  it('renders default copyright when none provided', () => {
    render(<Footer logo="FK" columns={columns} />)
    expect(screen.getByText(/Forgekit\. All rights reserved/)).toBeInTheDocument()
  })
})
