# eSIM Telegram Bot (MVP)

Простой Telegram-бот на **Node.js + TypeScript** с использованием **Telegraf**.

## Функции

- Команда `/start`
- Кнопочное меню:
  - `Подключить доступ`
  - `Мои eSIM`
  - `Исправить соединение`
  - `Поддержка`

## Структура проекта

- `package.json`
- `tsconfig.json`
- `src/bot.ts`

## Запуск

1. Установите зависимости:

```bash
npm install
```

2. Установите токен бота:

```bash
export BOT_TOKEN="ваш_токен_бота"
```

3. Запуск в режиме разработки:

```bash
npm run dev
```

4. Сборка и запуск production-версии:

```bash
npm run build
npm start
```

## Примечание

Для получения токена создайте бота через [@BotFather](https://t.me/BotFather).
