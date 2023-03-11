import { useEffect, useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { HeaderForPage } from '../../components/forum/HeaderForPage'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { ForumRow } from '../../components/forum/ForumRow'
import { ChatAnswerIcon } from '../../components/forum/icons/ChatAnswerIcon'
import { mockedBranches } from '../../mocs/forum'

export type ThemeBranch = {
  id: number
  name: string
  branchName: string
}

function ThemePage() {
  const navigate = useNavigate()
  const { theme_name } = useParams()
  const { state } = useLocation()
  const { text, id } = state.theme
  const [branches, setBranches] = useState<ThemeBranch[]>([])

  useEffect(() => {
    setBranches(mockedBranches)
  }, [id, theme_name])

  const goToBranch = (branch: ThemeBranch) => {
    navigate(`/forum/${theme_name}/${branch.branchName}`, {
      state: { theme: state.theme, branch: branch },
    })
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        bgcolor="background.paper"
        sx={{
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          p: 3,
        }}>
        <HeaderForPage text={text} backPath="/forum" />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth={'90%'}
          marginY={2}
          rowSpacing={4}>
          {branches.map(branch => (
            <ForumRow
              key={branch.id}
              onClick={() => goToBranch(branch)}
              icon={() =>
                ChatAnswerIcon({
                  width: '25',
                  height: '25',
                  viewBox: '0 0 25 25',
                })
              }
              text={branch.name}
              btnText="Ответы"
            />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export { ThemePage }
