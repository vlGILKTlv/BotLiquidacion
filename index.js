const { Telegraf } = require("telegraf")

const token = "5996958621:AAGWUg2l23E8nanOHGGwCSFuGDcxrKNa1y4"

const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply("Porque eres tan puto ricky?"));

bot.help((ctx) => ctx.reply("Aqui puedes ver los detalles"))

bot.command("empezar" , (ctx) => ctx.reply("Cuanto vendiste?"))



bot.hears('1', (ctx) => ctx.reply("escogiste el 1"))

bot.on("text", (ctx) => {
    let mensaje = ctx.message.text;
    ctx.reply(mensaje)
})



console.log ("El bot esta activo")

bot.launch();

