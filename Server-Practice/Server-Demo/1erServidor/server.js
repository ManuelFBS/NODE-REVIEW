const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  console.log('===> res (respuesta)')
  console.log(res.statusCode)

  res.end('Hola Mundo !!!')
})

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
