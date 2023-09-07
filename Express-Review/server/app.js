const express = require('express')
const routerWelcome = require('./Routers/WelcomeRouter.js')
const { routerCursos } = require('./Routers/CursosRouter.js')
const { routerProgramacion } = require('./Routers/ProgRouter.js')
const { routerMatematicas } = require('./Routers/MatsRouter.js')

const server = express()

server.use('/', routerWelcome)
server.use('/api/cursos', routerCursos)
server.use('/api/cursos/programacion', routerProgramacion)
server.use('/api/cursos/matematicas', routerMatematicas)

const APPORT = process.env.PORT || 3000

server.listen(APPORT, () => {
  console.log(`Listening on port: ${APPORT}`)
})
