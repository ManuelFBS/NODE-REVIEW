const express = require('express')
const { infoCursos } = require('../api/cursos.js')

const server = express()

server.get('/', (req, res) => {
  res.send('Mi primer servidor con Express y Node.js... Cursos 💻.')
})

const APPORT = process.env.PORT || 3000

server.listen(APPORT, () => {
  console.log(`Listening on port: ${APPORT}`)
})
