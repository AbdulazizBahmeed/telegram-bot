const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');

// const bot = new Telegraf(process.env.BOT_TOKEN );
const bot = new Telegraf("6165091379:AAEmRGRGTjx4eTQnOLiEgZr1PtD3zqAmIv4");

bot.start((ctx) => ctx.reply('hi there'));

bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.hears('hi', (ctx) => {
    ctx.reply('this is text', Markup
    .keyboard([
      ["Button 1", 'button 2'], // Row1 with 2 buttons
      ['button 3', 'button 4'], // Row2 with 2 buttons
      ['button 5', 'button 6', 'button 7'] // Row3 with 3 buttons
    ])
    .oneTime()
    .resize()
  )
});

bot.hears('Button 1', (ctx) => {
    ctx.reply(ctx.message.text.substring(0,2));
    
})

bot.hears("inline", (ctx) => {
    ctx.reply("Hi there!", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: "Button 1", callback_data: "data" }, { text: "Button 2", callback_data: "btn-2" } ],

                /* One button */
                [ { text: "Next", callback_data: "next" } ],
                
                /* Also, we can have URL buttons. */
                [ { text: "Open in browser", url: "telegraf.js.org" } ]
            ]
        }
    });
});

bot.action('data',
    (ctx) => ctx.reply('hello world')
);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));