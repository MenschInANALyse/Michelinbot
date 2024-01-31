const MessageCreateEvent = new (require('./events/messageCreate'))
startTime = Date.now()

class Setup {

  start(user) {
    console.log('Started Discord-Bot successfully')
    user.setPresence({
      activities:
      [
        {
          name: '#help',
          type: 'LISTENING'
        }
      ],
      status: 'online'
    })
  }
 
  update(client) {
    client.on('messageCreate', MessageCreateEvent.readMessage)
  }
}

module.exports = Setup