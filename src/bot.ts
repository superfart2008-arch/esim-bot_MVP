import { Markup, Telegraf } from 'telegraf';

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error('BOT_TOKEN is not set. Please provide a Telegram bot token in environment variables.');
}

const bot = new Telegraf(token);

const menuKeyboard = Markup.keyboard([
  ['Подключить доступ'],
  ['Мои eSIM'],
  ['Исправить соединение'],
  ['Поддержка']
]).resize();

bot.start(async (ctx) => {
  await ctx.reply(
    'Привет! Это eSIM-бот. Выберите действие в меню ниже:',
    menuKeyboard
  );
});

bot.hears('Подключить доступ', async (ctx) => {
  await ctx.reply('Оставьте заявку на подключение: укажите страну, срок и объём трафика.');
});

bot.hears('Мои eSIM', async (ctx) => {
  await ctx.reply('Здесь будут отображаться ваши активные и архивные eSIM.');
});

bot.hears('Исправить соединение', async (ctx) => {
  await ctx.reply('Попробуйте перезагрузить устройство и включить/выключить авиарежим на 10 секунд.');
});

bot.hears('Поддержка', async (ctx) => {
  await ctx.reply('Свяжитесь с поддержкой: @support_username');
});

bot.catch((error) => {
  console.error('Bot error:', error);
});

void bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
