import { Box, Container, Stack, Divider } from '@mui/material'
import { ItemLeader } from './ItemLeader'
import { LeaderHeader } from './LeaderHeader'

import { gamers1, gamers2 } from './data'

type Gamer = {
  rating: number
  name: string
  score: string
  avatar: string
}

function GamerStack({
  gamers,
  left = false,
}: {
  gamers: Gamer[]
  left?: boolean
}) {
  return (
    <Stack sx={left ? { mr: 35 } : { ml: '55px!important' }} spacing={2}>
      {gamers.map(item => (
        <ItemLeader
          key={item.name}
          rating={item.rating}
          name={item.name}
          score={item.score}
        />
      ))}
    </Stack>
  )
}

export function LeaderboardPage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        bgcolor="background.paper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          borderRadius: 2,
          p: 3,
        }}>
        <LeaderHeader />
        <Stack
          direction="row"
          sx={{
            mt: '35px',
          }}
          divider={
            <Divider
              sx={{
                borderRightWidth: 3,
                bgcolor: '#1E515D',
              }}
              orientation="vertical"
              flexItem
            />
          }
          spacing={2}>
          <GamerStack gamers={gamers1} />
          <GamerStack gamers={gamers2} left />
        </Stack>
      </Box>
    </Container>
  )
}
