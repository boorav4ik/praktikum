import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { menuData } from './drawerBarData'
import { Box, Button } from '@mui/material'
import AvatarIcon from './icons/AvatarIcon'

interface SideBarProps {
  open?: boolean
}

export const SideBar: FC<SideBarProps> = ({ open }) => {
  const navigate = useNavigate()
  return (
    <List>
      <Box
        component="div"
        sx={{
          width: '100%',
          height: 150,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          mt: 2,
        }}>
        <Box
          sx={{
            width: open ? 100 : 50,
            height: open ? 100 : 50,
            background: '#DEF0EB',
            borderRadius: '50px',
            display: open ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AvatarIcon
            sx={{ width: open ? 75 : 50, height: open ? 75 : 50 }}
            open={open}
          />
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: '95%',
            fontWeight: 'bold',
            fontSize: '0.975rem',
            display: open ? 'block' : 'none',
            color: '#1E515D',
            mt: 2,
          }}>
          Войти
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          mt: 3,
        }}>
        {menuData.map(value => (
          <ListItem
            key={value.text}
            disablePadding
            sx={{
              display: 'block',
              mt: 0.5,
            }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => navigate(value.to)}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#1E515D',
                }}>
                {value.icon}
              </ListItemIcon>
              <ListItemText
                primary={value.text}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </List>
  )
}
