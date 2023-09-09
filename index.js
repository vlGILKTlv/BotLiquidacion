const { Telegraf } = require("telegraf")

const token = "5996958621:AAGWUg2l23E8nanOHGGwCSFuGDcxrKNa1y4"

const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply("Porque eres tan puto ricky?"));


console.log ("El bot esta activo")

bot.launch();

