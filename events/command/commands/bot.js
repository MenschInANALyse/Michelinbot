const Command = require('../command')
const MessageCreateEvent = require('../../messageCreate')
require('../../../setup')

class Bot extends Command {

  constructor() {
    super(['bot', 'time', 'offline'],
    'Seit wann ist der Bot online?',
    'Online-Zeit des Bots')
  }

  async execute(message) {
    const deltaTime = Date.now() - startTime;
    const fullSeconds = Math.floor(deltaTime / 1000)
    const fullMinutes = Math.floor(fullSeconds / 60)
    const fullHours = Math.floor(fullMinutes / 60)
    const fullDays = Math.floor(fullHours / 24)
    const fullWeeks = Math.floor(fullDays / 7)

    const resetSeconds = fullSeconds % 60
    const resetMinutes = fullMinutes % 60
    const resetHours = fullHours % 24
    const resetDays = fullDays % 7

    const titleSeconds = 'Sekunden'
    const titleMinutes = 'Minuten'
    const titleHours = 'Stunden'
    const titleDays = 'Tage'
    const titleWeeks = 'Wochen'

    const timeValues = [
      [titleSeconds, fullSeconds, resetSeconds],
      [titleMinutes, fullMinutes, resetMinutes],
      [titleHours, fullHours, resetHours],
      [titleDays, fullDays, resetDays],
      [titleWeeks, fullWeeks, fullWeeks]
    ]

    const resultOutputTimeMessage = this.updateResultOutputTimeMessage(timeValues)
    const resultOutputMessage = 'Der Bot ist seit **' + resultOutputTimeMessage + '** online'
    
    this.send(message, resultOutputMessage)
  }

  updateResultOutputTimeMessage(timeValues) {
    let output = ''
    timeValues.forEach(values => {
      const title = values[0]
      const fullTime = values[1]
      const resetTime = values[2]

      if (fullTime > 0) {
        const time = `${resetTime} ${title}`
        output = title === 'Minuten' ?
          time + ' und ' + output : title === 'Sekunden' ?
          time : time + ", " + output
      }
      if (resetTime === 1) {
        output = output.replace(title, title.substring(0, title.length - 1))
      }
    })
    return output
  }
}

module.exports = new Bot()