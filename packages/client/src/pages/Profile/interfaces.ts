import { ChangeEvent, FocusEvent } from 'react'

export interface ProfileValidateFieldsProps {
  label: string
  name: string
  value: object
  disabled: boolean
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void
  error: string
}
