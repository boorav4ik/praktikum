import { Box, Stack } from '@mui/material'

import { DubleTypography } from './DoubleTypography'
import { Button } from './Button'
import { AvatarBox } from './AvatarBox'

export function NavBar() {
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
        <Button key="profile">Профиль</Button>
        <Button key="leaders">Таблица лидеров</Button>
        <Button key="forum">Форум</Button>
      </Stack>
    </Box>
  )
}
