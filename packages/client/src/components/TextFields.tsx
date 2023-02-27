import { TextField as MuiTextField, styled } from '@mui/material'

export const TextField = styled(MuiTextField)({
  '& label': {
    color: '#FFF',
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#1E515D',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      color: '#FFF',
    },
  },
})
