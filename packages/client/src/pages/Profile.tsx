import { Box, Container, Stack, TextField } from '@mui/material'
import { AvatarBox } from '../components/AvatarBox'
import { Button } from '../components/Button'
import { user } from '../mock/user'

function Header() {
  return (
    <Box component="header">
      <AvatarBox />
    </Box>
  )
}

function buildProfileField(field: string) {
  return (
    <TextField
      key={field}
      id={field}
      label={field as string}
      value={user[field as keyof typeof user]}
      variant="filled"
    />
  )
}

function Main() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-evenly',
        p: 3,
        width: '75%',
      }}>
      <Stack spacing={2}>
        {['displayName', 'firstName', 'secondName'].map(buildProfileField)}
      </Stack>
      <Stack spacing={2}>
        {['email', 'login', 'phone'].map(buildProfileField)}
      </Stack>
    </Box>
  )
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
      <Button>Редактировать</Button>
      <Button>Играть!</Button>
    </Box>
  )
}

export function ProfilePage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        bgcolor="background.paper"
        sx={{
          display: 'flex',
          borderRadius: 16,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 10,
          border: '3px solid #1E515D',
          p: 3,
        }}>
        <Header />
        <Main />
        <Footer />
      </Box>
    </Container>
  )
}
