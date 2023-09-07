const express = require('express')
const { infoCursos } = require('../api/cursos.js')
const { sortsMinToMax } = require('../utils/Sorts.js')

const server = express()

// Routers...
const routerCursos = express.Router()
const routerProgramacion = express.Router()
const routerMatematicas = express.Router()

server.use('/api/cursos', routerCursos)
server.use('/api/cursos/programacion', routerProgramacion)
server.use('/api/cursos/matematicas', routerMatematicas)

// -------------------------  Routing...  ------------------------------------------------
server.get('/', (req, res) => {
  res.send('Mi primer servidor con Express y Node.js... Cursos 💻.')
})

routerCursos.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

// Programación...
// server.get('/api/cursos/programacion', (req, res) => {
//   res.send(JSON.stringify(infoCursos.programacion))
// })
routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion))
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const results = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  )

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`)
  }

  if (req.query.ordenar === 'vistas') sortsMinToMax(results, res)
  else return res.status(200).send(JSON.stringify(results))
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje
  const nivel = req.params.nivel

  const results = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  )

  if (results.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron lenguajes: ${lenguaje} de nivel: ${nivel}`)
  }

  res.status(200).send(results)
})
// ------------------------------------------------------------------------------------------------------

// Matematicas...
routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas))
})

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema
  const results = infoCursos.matematicas.filter((curso) => curso.tema === tema)

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron temas de: ${tema}`)
  }

  if (req.query.ordenar === 'vistas') sortsMinToMax(results, res)
  else res.status(200).send(JSON.stringify(results))
})

// ------------------------------------------------------------------------------------------------------

const APPORT = process.env.PORT || 3000

server.listen(APPORT, () => {
  console.log(`Listening on port: ${APPORT}`)
})
