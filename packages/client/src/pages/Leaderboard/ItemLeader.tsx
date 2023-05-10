import { Box, Typography } from '@mui/material'
import { AvatarBox } from 'components/AvatarBox'
import { AvatarHost } from '../../api/config'

interface ItemLeaderProps {
  name: string | null | undefined
  score: number
  rating: number
  src: string | undefined
}

export function ItemLeader(props: ItemLeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Box
        sx={{
          width: 20,
          mr: '10px',
        }}>
        <Typography
          component="span"
          sx={{ fontWeight: 700, fontSize: 32, display: 'contents' }}
          color="#C1EEE1">
          {props.rating}
        </Typography>
      </Box>
      <AvatarBox
        src={props.src}
        sx={{
          width: '100px',
          height: '100px',
          bgcolor: '#1E515D',
          cursor: 'pointer',
        }}
      />

      <Box
        sx={{
          width: 100,
          display: 'flex',
          flexDirection: 'column',
          ml: '25px',
        }}>
        <Typography
          component="div"
          sx={{ fontWeight: 700, fontSize: 20, display: 'block' }}
          color="green.64">
          {props.name}
        </Typography>

        <Typography
          component="div"
          sx={{ fontWeight: 700, fontSize: 24, display: 'block' }}
          color="white">
          {props.score}
        </Typography>
      </Box>
    </Box>
  )
}
