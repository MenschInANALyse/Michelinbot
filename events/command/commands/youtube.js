const Command = require('../command')

class Youtube extends Command {

  constructor() {
    super(['youtube', 'videos', 'highlights'],
    'Informationen über die lustigen Clips, die wir erstellen',
    'BoS-Highlights')
  }

  async execute(message) {
    this.send(message, 'Auf unserem Kanal finden sich die immer wiederkehrenden lustigen Momente beim Zocken.\n https://www.youtube.com/channel/UCAoAIGqr67H62mNpwWovkeQ\n Viel Spaß beim Ansehen!')
  }
}

module.exports = new Youtube()