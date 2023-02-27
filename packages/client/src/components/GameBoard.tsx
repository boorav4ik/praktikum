import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export function GameBoard() {
  return (
    <Box
      sx={{
        height: 540,
        width: 540,
        borderRadius: 16,
        border: '3px solid #1E515D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography
        component="span"
        sx={{ fontWeight: 700, fontSize: 32, display: 'contents' }}
        color="green.64">
        Счёт:
      </Typography>
      <Typography
        component="span"
        sx={{ fontWeight: 700, fontSize: 32, display: 'contents' }}
        >
        {" "}100500
      </Typography>
      <Box>
        
      </Box>
    </Box>
  )
}
