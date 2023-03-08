const { Telegraf, Markup, session } = require("telegraf");
const { message } = require("telegraf/filters");

// const bot = new Telegraf(process.env.BOT_TOKEN );
const bot = new Telegraf("6165091379:AAEmRGRGTjx4eTQnOLiEgZr1PtD3zqAmIv4");

bot.start(async (ctx) => {
  await ctx.reply("يا اهلا في بوت نادي الحاسب الالي");
  mainMenu(ctx);
});

bot.hears("القائمة الرئيسية", mainMenu);

bot.hears("علوم الحاسب الاّلي", (ctx) => {
  ctx.reply("اختر مستوى المادة:", {
    reply_markup: {
      inline_keyboard: [
        /* Inline buttons. 2 side-by-side */
        [
          { text: "المستوى الاول", callback_data: "CSlvl1" },
          { text: "المستوى الثاني", callback_data: "CSlvl2" },
        ],
        [
          { text: "المستوى الثالث", callback_data: "CSlvl3" },
          { text: "المستوى الرابع", callback_data: "CSlvl4" },
        ],
        [
          { text: "المستوى الخمامس", callback_data: "CSlvl5" },
          { text: "المستوى السادس", callback_data: "CSlvl6" },
        ],
        [
          { text: "المستوى السابع", callback_data: "CSlvl7" },
          { text: "المستوى الثامن", callback_data: "CSlvl8" },
        ],
        [
          { text: "المستوى التاسع", callback_data: "CSlvl9" },
          { text: "المستوى العاشر", callback_data: "CSlvl10" },
        ],
        [{ text: "القائمة الرئيسية", callback_data: "mainMenu" }],
      ],
    },
  });
});

bot.action("CSlvl1", (ctx) => {
  ctx.reply(
    "اخترالمادة:",
    Markup.keyboard([
      ["برمجة الحاسب الآلي"],
      ["التصميم الرقمي المنطقي"],
      ["هياكل متقطعة (1)"],
      ["القائمة الرئيسية"],
    ]).resize()
  );
});

bot.action("mainMenu", mainMenu);

function mainMenu(ctx) {
  ctx.reply(
    "اختر تخصصك:",
    Markup.keyboard([
      ["علوم الحاسب الاّلي"],
      ["نظم المعلومات"],
      ["هندسة الحاسب الاّلي"],
    ])
      .oneTime()
      .resize()
  );
}

bot.on(message("text"), (ctx) => {
  ctx.reply(ctx.message.text, {
    reply_markup: {
      inline_keyboard: [
        /* Inline buttons. 2 side-by-side */
        [
          { text: "تمارين", callback_data: "excersies" },
          { text: "سلايدات", callback_data: "slides" },
        ],

        /* Also, we can have URL buttons. */
        [{ text: "مقطع شرح", url: "youtube.com" }],
      ],
    },
  });
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
