const Command = require('../command')
const MessageCreateEvent = require('../../messageCreate')

class Donator extends Command {

  constructor() {
    super(['help', 'commands', '?'],
    'Die Befehlsliste des Bots',
    'Befehlsliste')
  }

  async execute(message) {
    this.send(message, '')
  }
}

module.exports = new Donator()