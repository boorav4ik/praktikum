import { render } from '@testing-library/react'
import { AvatarBox } from './index'

describe('AvatarBox', () => {
  it('renders an avatar with an icon when no image src is provided', () => {
    const { container  } = render(<AvatarBox />)
    const svg = container.querySelector('[viewBox="0 0 60 60"]')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('viewBox', "0 0 60 60")
  })

  it('renders an avatar with an image when src is provided', () => {
    const { getByRole } = render(<AvatarBox src="test-image.jpg" />)
    const avatar = getByRole('img')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', 'test-image.jpg')
  })
})