import { render, screen, fireEvent } from '@testing-library/react'
import {ForumRow} from './index'
import {ChatAnswerIcon} from '../icons/ChatAnswerIcon'

const text = 'test'
const btnText = 'testBtn'
const onClick = jest.fn()
describe('ForumRow component', () => {
  it('renders', () => {
    render(<ForumRow text={text} btnText={btnText} onClick={onClick}/>)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(btnText)).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const { getByRole } = render(<ForumRow text={text} btnText={btnText} onClick={onClick}/>)
    const btn = getByRole('button')

    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders ChatAnswerIcon', () => {
    render(<ForumRow text={text} btnText={btnText} onClick={onClick} icon={ChatAnswerIcon}/>)

    expect(screen.getByRole('path')).toBeInTheDocument()
  })
})
export {}