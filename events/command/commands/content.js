const Command = require('../command')
const MessageCreateEvent = require('../../messageCreate')

class Content extends Command {

  constructor() {
    super(['content', 'textures', 'errors'],
    'Hilfe bei fehlenden Texturen auf dem Server',
    'Texturenfehler')
  }

  async execute(message) {
    const guild = message.guild
    const info = guild.channels.cache.get('894999497933987870') //#information
    const memberCount = guild.memberCount
    let members = 0
    
    await guild.members.fetch().then(response => {
      response.forEach(member => {
        if (!member.user.bot) {
          members++
        }
      })
    })

    this.send(message, 'In ' + `<#${info.id}>` + ' findest du die Anleitung, fehlende Texturen zu beheben!')
  }
}

module.exports = new Content()