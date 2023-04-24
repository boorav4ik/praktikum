import { Box, Container, Stack, Divider } from '@mui/material'
import { ItemLeader } from './ItemLeader'
import { LeaderHeader } from './LeaderHeader'

import { gamers1, gamers2 } from './data'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useState } from 'react'

export function LeaderboardPage() {
  const [{ leaderData }] = useAuth()

  console.log('12')
  console.log(leaderData)
  // const [list1, setList1] = useState([])

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
          <Stack
            sx={{
              mr: '35px',
            }}
            spacing={2}>
            {leaderData.slice(0, 3).map((item, index) => (
              <ItemLeader
                rating={index + 1}
                name={item.data?.name}
                score={item.data?.score}
              />
            ))}
          </Stack>
          <Stack
            sx={{
              ml: '55px!important',
            }}
            spacing={2}>
            {leaderData.slice(3, 6).map((item, index) => (
              <ItemLeader
                rating={index + 1}
                name={item.data?.name}
                score={item.data?.score}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}
