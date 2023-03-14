import { ForumTheme } from '../pages/Forum/Forum'
import { ThemeBranch } from '../pages/Forum/Themes'
import { Message } from '../pages/Forum/ThemeBranch'

export const defaultThemes: ForumTheme[] = [
  {
    id: 1,
    text: 'Отзывы',
    themeName: 'reviews',
  },
  {
    id: 2,
    text: 'Технологии',
    themeName: 'technologies',
  },
  {
    id: 3,
    text: 'Называние',
    themeName: 'namings',
  },
]
export const mockedBranches: ThemeBranch[] = [
  {
    id: 1,
    name: 'еппп',
    branchName: 'adddd',
  },
]
export const mockedMessages: Message[] = [
  {
    id: 1,
    text: '������������',
    user: {
      id: 1,
      name: 'John Doe',
    },
  },
  {
    id: 2,
    text: 'asf dasf fasd sdfas fas fas fas fas fas fas fas fas f asdf asf asf asf asf asf asf asf asf asf',
    user: {
      id: 1,
      name: 'John Doe',
    },
  },
]
