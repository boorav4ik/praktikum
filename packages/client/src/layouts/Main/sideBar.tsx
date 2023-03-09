import { FC } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { menuData } from './drawerBarData'
import AvatarIcon from '../../layouts/Main/icons/AvatarIcon'
import { AuthButton } from './AuthButton'

interface SideBarProps {
  open?: boolean
}

interface NanListItemProps {
  icon: JSX.Element
  text: string
  to: string
  isExpanded: boolean
}

function NanListItem({ icon, text, to, isExpanded }: NanListItemProps) {
  return (
    <ListItem disablePadding sx={{ display: 'block', mt: 0.5 }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isExpanded ? 'initial' : 'center',
          px: 2.5,
        }}
        component={Link}
        to={to}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isExpanded ? 3 : 'auto',
            justifyContent: 'center',
            color: '#1E515D',
          }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ display: isExpanded ? 'block' : 'none' }}
        />
      </ListItemButton>
    </ListItem>
  )
}

export const SideBar: FC<SideBarProps> = ({ open = false }) => {
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
        <AuthButton isExpanded={open} />
      </Box>
      <Box
        component="div"
        sx={{
          mt: 3,
        }}>
        {menuData.map(value => (
          <NanListItem key={value.text} {...value} isExpanded={open} />
        ))}
      </Box>
    </List>
  )
}
