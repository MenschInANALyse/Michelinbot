const Command = require('../command')
const MessageCreateEvent = require('../../messageCreate')
let quotes = []
let sentQuotes = []
let allQuotes = []

class Quote extends Command {

  constructor() {
    super(['quote', 'zitat', '?'],
      'Zufälliges Zitat aus dem Zitate-Channel',
      'Zitat')
  }

   async execute(message) {
    const quoteChannel = message.guild.channels.cache.get('834912803923034162')
    const messages = quoteChannel.messages

    await messages.fetch({limit: 100}).then(response => {
      response.forEach(message => {
        const quote = message.content
        if (!allQuotes.includes(quote)) {
          allQuotes.push(quote)
        }
        if (!quotes.includes(quote) && !sentQuotes.includes(quote)) {
          quotes.push(quote)
        }
      })
    })

    if (sentQuotes.length == allQuotes.length) {
      sentQuotes = []
    }

    let quote = 'Hey, bitte versuche es erneut, die Zitate waren wohl etwas schlecht!'
    if (quotes.length > 0) {
      quote = quotes[(Math.round(Math.random() * quotes.length))]
      sentQuotes.push(quote);
    }

    this.send(message, quote)
  }
}

module.exports = new Quote()