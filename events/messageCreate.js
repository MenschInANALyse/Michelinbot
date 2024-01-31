const prefix = '#'
let commands = []

class MessageCreateEvent {
  
  constructor() {
    require('./command/commands/youtube')
    require('./command/commands/help')
    require('./command/commands/members')
    require('./command/commands/content')
    require('./command/commands/players')
    require('./command/commands/bot')
    require('./command/commands/quote')
  }

  static insertCommand(command) {
    commands.push(command)
  }

  static getCommandList() {
    return commands
  }

  async readMessage(message) {
    if (!message.content.startsWith(prefix)) {
      return
    }
    commands.forEach(command => {
      command.names.forEach(name => {
        if (message.content === prefix + name) {
          command.execute(message)
        }
      })
    })
  }
}

module.exports = MessageCreateEvent