import { Box, Button, Stack } from '@mui/material'
import { DubleTypography } from './DoubleTypography'
import { AvatarBox } from './AvatarBox'
import { Link } from 'react-router-dom'
import { Routes } from '../utils/routes'

const NAV_BUTTONS = {
  Профиль: Routes.Profile,
  'Таблица лидеров': Routes.Leaders,
  Форум: Routes.Forum,
}

function NavButton(props: { to: string; children: string }) {
  return (
    <Button
      component={Link}
      variant="contained"
      sx={{ fontWeight: 700, minWidth: 270 }}
      {...props}
    />
  )
}

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
        {Object.entries(NAV_BUTTONS).map(([text, route]) => (
          <NavButton key={route} to={`/${route}`}>
            {text}
          </NavButton>
        ))}
      </Stack>
    </Box>
  )
}
