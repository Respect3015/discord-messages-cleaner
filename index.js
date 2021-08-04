const fetch = require('node-fetch');
const chalk = require('chalk');

setInterval(async function() {

    let authToken = ""

    let channel = ""

    let messages = await fetch(`https://discord.com/api/v9/channels/${channel}/messages`, {
        method: 'GET',
        headers: {
            Authorization: authToken
        }
    }).catch(err => console.log(err))
    
        let fetchedMessages = await messages.json()

        let filteredMessages = await fetchedMessages.filter(a => a.author.id == '851470961429839872')

        await filteredMessages.forEach(async message => {

            if(!message.content) return console.log(chalk.redBright('Silinecek mesaj kalmadı :/'))

            console.log(chalk.greenBright(`Mesaj silindi: `) + message.content)
    
      await fetch(`https://discord.com/api/v9/channels/${channel}/messages/${message.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: authToken
            }
        }).catch(err => console.log(err))

    })

}, 3000)
