const { Client, Intents } = require('discord.js')
const Setup = new (require('./setup'))
const keepAlive = require('./server')

const intents = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_VOICE_STATES
]

const client = new Client({intents: intents})
client.on('ready', () => {
  Setup.start(client.user)
  keepAlive(client)
})
Setup.update(client)
client.login(process.env.TOKEN)
