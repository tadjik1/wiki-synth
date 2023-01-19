const axios = require('axios');
const yandex = require('../utils/yandex');

module.exports = async function wikipedia(ctx) {
    const response = await axios.get('https://ru.wikipedia.org/w/api.php', {
        params: {
            format: 'json',
            action: 'query',
            prop: 'extracts',
            exintro: '',
            explaintext: '',
            redirects: 1,
            titles: ctx.message.text,
        }
    });

    const { pages } = response.data.query;

    if (pages['-1']) {
        ctx.reply(`сожалеем, по запросу "${ctx.message.text}" в википедии ничего найти не удалось`);
        return;
    }

    const page = Object.keys(pages)[0];
    let text = pages[page].extract.replaceAll('\n', ' ').slice(0, 300);
    text = text.slice(0, text.lastIndexOf('.'));

    const file = await yandex(text);
    if (!file) {
        ctx.reply('что-то сломалось');
        return;
    }

    ctx.sendVoice({ source: file });
}