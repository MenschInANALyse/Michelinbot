const Command = require('../command')

class Members extends Command {

  constructor() {
    super(['members', 'users', 'online'],
    'Liste aller existenten Wesen auf dem Discord',
    'Memberinformationen')
  }

  async execute(message) {
    const checkOnlines = message.content.includes('online')
    const guild = message.guild

    let onlineMembers = 0
    let members = 0
    let resultOutputMessage = 'Hey, bitte versuche es erneut, die Verbindung konnte nicht hergestellt werden!'
    let botIds = []

    this.title = checkOnlines ? 'Member- und Serverinformationen' : 'Memberinformationen'
    
    await guild.members.fetch().then(response => {
      response.forEach(member => {
        if (member.user.bot) {
          botIds.push(member.user.id)
        } else {
          members++
        }
      })
    })

    if (checkOnlines) {
      await guild.presences.cache.forEach(presence => {
        if (!presence.user.bot && (presence.status === 'online' || presence.status === 'dnd')) {
          onlineMembers++
        }
      })
    }

    resultOutputMessage = checkOnlines ? 
    'Zurzeit sind **' + onlineMembers + '** Leute auf dem Discord-Server online. Frag doch nach einem Gespräch!' 
    : 
    'Derzeitige Anzahl der Discord-Member: **' + members + ' Normalsterbliche** und **' + botIds.length + ' Bots**'

    this.send(message, resultOutputMessage)
  }
}

module.exports = new Members()