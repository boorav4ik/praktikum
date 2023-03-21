Выпускной командный проект курса [Мидл фронтенд-разработчик](https://practicum.yandex.ru/middle-frontend/)

Демо: [link](https://praktikum-client.vercel.app/)


<img src="https://sun9-32.userapi.com/impg/6HuIZuRUg4YST4mrnUE_2cWAtf1Oajtr_90UCg/04d97exm_0Y.jpg?size=1280x671&quality=96&sign=a2b078af7868bfa3c8c883a4c2b5e21c&type=album" alt="demo" style="width: 600px;"/>


### 2048
Игра 2048 — это популярная головоломка, которая была создана в 2014 году Итальянским разработчиком Габриэле Чирулли.

Игровое поле состоит из 16 ячеек, каждая из которых может содержать число, которое является степенью двойки (2, 4, 8, 16, 32 и т.д.).

Цель игры — объединить ячейки с одинаковыми числами и получить число 2048. Для этого нужно перемещать ячейки по полю, используя стрелки на клавиатуре. Если в результате перемещения две ячейки с одинаковыми числами сталкиваются, то они объединяются в одну ячейку, в которой будет число, равное сумме чисел объединяемых ячеек. Игра заканчивается, когда на поле не остается свободных ячеек или когда игрок получает число 2048.

### Стек использумых технологий и Web API:
- `React`, `Redux`, `Redux Toolkit`
- `Material-UI`
- `Fullscreen API`
- `Jest`
- `Service Worker`


### Как запускать?

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev`
3. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент
4. Выполните команду `yarn dev --scope=server` чтобы запустить только server


### Как добавить зависимости?
В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента 
```yarn lerna add {your_dep} --scope client```

Для сервера
```yarn lerna add {your_dep} --scope server```

И для клиента и для сервера
```yarn lerna add {your_dep}```


Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
```yarn lerna add {your_dep} --dev --scope server```


### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

```yarn test```

### Линтинг

```yarn lint```

### Форматирование prettier

```yarn format```

### Production build

```yarn build```

И чтобы посмотреть что получилось


`yarn preview --scope client`
`yarn preview --scope server`

## Хуки
В проекте используется [lefthook](https://github.com/evilmartians/lefthook)
Если очень-очень нужно пропустить проверки, используйте `--no-verify` (но не злоупотребляйте :)

## Ой, ничего не работает :(

Откройте issue, я приду :)

## Автодеплой статики на vercel
Зарегистрируйте аккаунт на [vercel](https://vercel.com/)
Следуйте [инструкции](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
В качестве `root directory` укажите `packages/client`

Все ваши PR будут автоматически деплоиться на vercel. URL вам предоставит деплоящий бот

## Production окружение в докере
Перед первым запуском выполните `node init.js`


`docker compose up` - запустит три сервиса
1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`

### Команда

[Максим](https://github.com/boorav4ik) | [Денис](https://github.com/tayru) |  [Евгений](https://github.com/LapEv) |  [Роман](https://github.com/Replicatus) |  [Виктор](https://github.com/viktor-nonjme)