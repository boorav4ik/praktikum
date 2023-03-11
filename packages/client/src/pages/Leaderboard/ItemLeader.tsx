import { Box, Typography } from '@mui/material'
import { AvatarBox } from '../../components/AvatarBox'

interface ItemLeaderProps {
  name: string
  score: string
  rating: number
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

            <AvatarBox />
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
