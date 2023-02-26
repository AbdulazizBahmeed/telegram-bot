import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', async (ctx) => {
    
    // Using context shortcut
    // Using context shortcut
  await ctx.reply(`Hello ${ctx.state.role}`);
  });

bot.command('quit', async (ctx) => {

  // Using context shortcut
  await ctx.leaveChat();
});

bot.on(message('text'), async (ctx) => {

  // Using context shortcut
  await ctx.reply(`your message was ${ctx.message.text}`);
});


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));