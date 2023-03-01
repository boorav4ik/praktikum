import { Box, Stack } from '@mui/material'

import { DubleTypography } from './DoubleTypography'
import { Button } from './Button'
import { AvatarBox } from './AvatarBox'
import { useNavigate } from 'react-router-dom'

export function NavBar() {
  const navigate = useNavigate()
  const goToRoute = (route: string) => {
    navigate(`/${route}`);
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        mx: 5,
      }}>
      <AvatarBox />
      <DubleTypography
        first={{ content: 'Мой рекорд: ' }}
        second={{ content: ' 2436' }}
        sx={{ fontSize: 36 }}
      />
      <Stack spacing={2}>
        <Button onClick={() => goToRoute('profile')} key="profile">Профиль</Button>
        <Button onClick={() => goToRoute('leaders')} key="leaders">Таблица лидеров</Button>
        <Button onClick={() => goToRoute('forum')} key="forum">Форум</Button>
      </Stack>
    </Box>
  )
}
