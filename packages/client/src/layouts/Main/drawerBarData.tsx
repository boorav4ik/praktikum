import Main from '../../layouts/Main/icons/Main'
import ProfileIcon from '../../layouts/Main/icons/Profile'
import WinnerIcon from '../../layouts/Main/icons/Winner'
import ForumIcon from '../../layouts/Main/icons/Forum'
import GameIcon from '../../layouts/Main/icons/Game'

export const menuData = [
  { text: 'Главная', icon: <Main />, to: '/' },
  { text: 'Профиль', icon: <ProfileIcon />, to: '/profile' },
  { text: 'Лидеры', icon: <WinnerIcon />, to: '/leaders' },
  { text: 'Форум', icon: <ForumIcon />, to: '/forum' },
  { text: 'Начать игру', icon: <GameIcon />, to: '/game' },
]

export const drawerWidth = 355
