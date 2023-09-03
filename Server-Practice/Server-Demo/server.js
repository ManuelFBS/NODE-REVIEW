const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  console.log('===> req (solicitud)')
  console.log(req.url)
  console.log(req.method)

  res.end('Hola Mundo !!!')
})

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
