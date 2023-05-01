import { useState } from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { AudioIcon } from 'layouts/Main/icons/Audio'
import Track from 'assets/audio/Maco-Mamuco.mp3'

export function Audio() {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Box>
      <Button
        title='Музычку погромче'
        onClick={handleToggle}
        sx={{
          position: 'relative',
          padding: '12px',
          maxWidth: '54px',
          minWidth: '54px',
        }}>
        <AudioIcon />
      </Button>
      {toggle ? (
        <Box
          sx={{
            position: 'absolute',
            top: '-3px',
            left: '-318px',
          }}>
          <audio src={Track} controls loop></audio>
        </Box>
      ) : null}
    </Box>
  )
}
