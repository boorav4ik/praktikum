export type ThemeData = {
  theme: string
  topic?: object
  comment?: object
}

export const themeData: ThemeData[] = [
  {
    theme: 'Администрация',
    topic: {
      title: 'Добро пожаловать в наш форум!',
      description:
        'Здесь вы можете оставить свои комментарии администрации форума.',
    },
    comment: {
      text: 'Комментарий к администрации',
      id_author: '3456768',
      author: 'Елизавета',
    },
  },
  {
    theme: 'Отзывы',
    topic: {
      title: 'Отзывы об игре',
      description: 'Здесь вы можете оставить свои отзывы и пожелания об игре.',
    },
    comment: {
      text: 'Отличная игра!',
      id_author: '564789',
      author: 'Михаил',
    },
  },
  {
    theme: 'Технологии',
    topic: {
      title: 'Новые технологии!',
      description: 'В этой ветке обсуждаются новые технологии.',
    },
    comment: {
      text: 'В этой игре используются новейшие технологии',
      id_author: '123098',
      author: 'Виктория',
    },
  },
]
