const express = require('express')
const server = express()

server.all('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  console.log('Got input')
  res.end()
})

function keepAlive() {
  server.listen(process.env.PORT, () => {console.log('Server is online!')})
}
module.exports = keepAlive