const bot = require("./telegram_bot");
const localtunnel = require("localtunnel");

const bot_port = 3000;

const start_all = async () => {
    const tunnel = await localtunnel({ port: bot_port });
    
    bot.launch({
        webhook: {
            domain: tunnel.url,
            port: bot_port
        }
    });
};

start_all();