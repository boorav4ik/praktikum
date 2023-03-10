import Main from './icons/Main'
import ProfileIcon from './icons/Profile'
import WinnerIcon from './icons/Winner'
import ForumIcon from './icons/Forum'
import GameIcon from './icons/Game'

export const menuData = [
  { text: 'Главная', icon: <Main />, to: '/' },
  { text: 'Профиль', icon: <ProfileIcon />, to: '/profile' },
  { text: 'Лидеры', icon: <WinnerIcon />, to: '/leaders' },
  { text: 'Форум', icon: <ForumIcon />, to: '/forum' },
  { text: 'Начать игру', icon: <GameIcon />, to: '/game' },
]

export const drawerWidth = 355
