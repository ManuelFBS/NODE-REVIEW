const server = require('./server/src/server')
const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
