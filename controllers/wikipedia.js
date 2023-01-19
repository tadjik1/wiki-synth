const axios = require('axios');

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

    console.log(response.data.query.pages);

    const { pages } = response.data.query;

    if (pages['-1']) {
        ctx.reply(`сожалеем, по запросу "${ctx.message.text}" в википедии ничего найти не удалось`);
        return;
    }

    const page = Object.keys(pages)[0];

    ctx.reply(pages[page].extract.replaceAll('\n', ' '));
}