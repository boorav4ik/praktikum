import { ChangeEvent, FocusEvent } from 'react'
type stringOrNull = string | null
export interface ProfileValidateFieldsProps {
  label: string
  name: string
  value: object | stringOrNull
  disabled: boolean
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void
  error: boolean
  errorText: string
}
