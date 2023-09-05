const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.end('Hello Manuel Felipe !!!')
})

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
