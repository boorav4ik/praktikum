import { Box, Container, Stack, Divider } from '@mui/material'
import { ItemLeader } from './ItemLeader'
import { LeaderHeader } from './LeaderHeader'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export function LeaderboardPage() {
  const leaderData = useSelector((state: RootState) => state.leader.leaderData)
  console.log(leaderData)

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
