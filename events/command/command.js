const MessageCreateEvent = require('../messageCreate')

class Command {
  
  constructor(names, description, title) {
    this.names = names
    this.description = description
    this.title = title
    MessageCreateEvent.insertCommand(this)
  }

  async execute(message) {
    
  }

  send(message, output) {
    let title = this.title
    if (title) {
      title = '----------------------------\n **_' + this.title + '_**\n----------------------------\n'
    }
    message.channel.send(title + output)
  }
}

module.exports = Command