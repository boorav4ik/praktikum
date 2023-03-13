import { Box, Stack } from '@mui/material'
import { DubleTypography } from '../../components/DoubleTypography'
import { AvatarBox } from '../../components/AvatarBox'
import { LinkButton } from '../../components/LinkButton'
import { Routes } from '../../utils/routes'

const NAV_BUTTONS = [
  { text: 'Профиль', to: Routes.Profile },
  { text: 'Таблица лидеров', to: Routes.Leaders },
  { text: 'Форум', to: Routes.Forum },
]

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
        {NAV_BUTTONS.map(({ text, to }) => (
          <LinkButton key={to} to={`/${to}`}>
            {text}
          </LinkButton>
        ))}
      </Stack>
    </Box>
  )
}
