const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.end('Hello World !!!')
})

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
