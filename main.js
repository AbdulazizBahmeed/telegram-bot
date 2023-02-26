const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

// const bot = new Telegraf(process.env.BOT_TOKEN );
const bot = new Telegraf("6165091379:AAEmRGRGTjx4eTQnOLiEgZr1PtD3zqAmIv4");

bot.start((ctx) => ctx.reply('hi there'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));