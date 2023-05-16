import { render } from '@testing-library/react'
import { MessageRow } from './index'

describe('MessageRow component', () => {
  const mockMessage = {
    id: '1',
    text: 'Hello, world!',
    id_topic: '123456',
    id_theme: '123456',
    id_author: '123456',
    author: 'John Doe',
  }

  it('renders the message text', () => {
    const { getByText } = render(<MessageRow messages={mockMessage} />)
    const messageText = getByText(mockMessage.text)
    expect(messageText).toBeInTheDocument()
  })

  it('renders the user name', () => {
    const { getByText } = render(<MessageRow messages={mockMessage} />)
    const userName = getByText(mockMessage.author)
    expect(userName).toBeInTheDocument()
  })

  it('applies the color to Message text', () => {
    const color = 'black'
    const { getByText } = render(
      <MessageRow messages={mockMessage} color={color} />
    )
    const paragraph = getByText(mockMessage.text)
    expect(paragraph).toHaveStyle('color: black')
  })
})
