import Main from '../../layouts/Main/icons/Main'
import ProfileIcon from '../../layouts/Main/icons/Profile'
import WinnerIcon from '../../layouts/Main/icons/Winner'
import ForumIcon from '../../layouts/Main/icons/Forum'
import GameIcon from '../../layouts/Main/icons/Game'
import { Routes } from '../../utils/routes'

export const menuData = [
  { text: 'Главная', icon: <Main />, to: Routes.Index },
  { text: 'Профиль', icon: <ProfileIcon />, to: `/${Routes.Profile}` },
  { text: 'Лидеры', icon: <WinnerIcon />, to: `/${Routes.Leaders}` },
  { text: 'Форум', icon: <ForumIcon />, to: `/${Routes.Forum}` },
  { text: 'Начать игру', icon: <GameIcon />, to: `/${Routes.Game}` },
]

export const drawerWidth = 355
