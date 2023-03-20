import { ChangeEvent, FocusEvent } from 'react'

export interface ProfileChangePasswordFieldsProps {
  label: string
  name: string
  value: object
  disabled: boolean
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void
  errors: object
}
