const Command = require('../command')
const MessageCreateEvent = require('../../messageCreate')

class Help extends Command {

  constructor() {
    super(['help', 'commands', '?'],
    'Die Befehlsliste des Bots',
    'Befehlsliste')
  }

  async execute(message) {
    let commands = []
    MessageCreateEvent.getCommandList().forEach(command => commands.push(command.names.join(' | ') + ' ~ **' + command.description + '**'))

    this.send(message, commands.join('\n'))
  }
}

module.exports = new Help()