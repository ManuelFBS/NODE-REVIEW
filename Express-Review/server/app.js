const express = require('express')
// const PORT = 3000
const { PORT } = process.env
const { infoCursos } = require('../api/cursos.js')

const server = express()

server.get('/', (req, res) => {
  res.send('Mi primer servidor... Cursos 💻.')
})

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
