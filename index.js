const crypto = require('node:crypto');
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('привет'));

bot.on('message', (ctx) => ctx.reply('привет'));

bot.launch({
    webhook: {
        // Public domain for webhook; e.g.: example.com
        domain: process.env.PUBLIC_DOMAIN,

        // Port to listen on; e.g.: 8080
        port: process.env.PORT,

        // Optional path to listen for.
        // `bot.secretPathComponent()` will be used by default
        // hookPath: webhookPath,

        // Optional secret to be sent back in a header for security.
        // e.g.: `crypto.randomBytes(64).toString("hex")`
        secretToken: crypto.randomBytes(64).toString("hex")
    },
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));