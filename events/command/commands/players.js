const Command = require('../command')
const MessageCreateEvent = require('../../messageCreate')
const request = require("request-promise");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class Players extends Command {

  constructor() {
    super(['players', 'server', 'online'],
    'Anzahl der Spieler, die auf dem Server gerade spielen',
    'Serverinformationen')
  }

  async execute(message) {
    let players = ''

    await request({uri: 'https://gmod-servers.com/server/202672/'}, (error, response, body) => {
      const dom = new JSDOM(body)
      dom.window.document.querySelectorAll('strong').forEach(strong => {
        const text = strong.textContent
        if (text.includes('/ 12')) {
          players = text.trim()
        }
      })

    })
      const resultOutputMessage = players === '0 / 12' ? 
      'Es sind gerade **KEINE** Spieler auf dem Server. Schnell geh drauf!' :
      players ?
      'Es sind gerade **' + players + '** Leute auf dem TTT-Server online. Spiel doch mit!' 
      : 
      'Hey, bitte versuche es erneut, die Verbindung konnte nicht hergestellt werden!'
      

      if (message.content.includes('online')) {
        this.title = ''
      }

      this.send(message, resultOutputMessage)
  }
}

module.exports = new Players()