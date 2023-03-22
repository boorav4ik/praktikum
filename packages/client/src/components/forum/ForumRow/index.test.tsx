import { render, screen } from '@testing-library/react'
import {ForumRow} from './index'

const text = 'test'
const btnText = 'testBtn'
const onClick = () => { console.log('test') }
describe('ForumRow component', () => {
  it('renders', () => {
    render(<ForumRow text={text} btnText={btnText} onClick={onClick}/>)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(btnText)).toBeInTheDocument()
  })
})
export {}