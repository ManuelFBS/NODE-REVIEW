const express = require('express')
const { infoCursos } = require('../api/cursos.js')

const server = express()

// -------------------------  Routing...  ------------------------------------------------
server.get('/', (req, res) => {
  res.send('Mi primer servidor con Express y Node.js... Cursos 💻.')
})

server.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

server.get('/api/cursos/programacion', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion))
})

server.get('/api/cursos/matematicas', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas))
})
// --------------------------------
server.get('/api/cursos/programacion/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const results = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  )

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`)
  }

  if (req.query.ordenar === 'vistas') {
    // Se establece un ordenamiento de menor a mayor...
    return res
      .status(200)
      .send(JSON.stringify(results.sort((a, b) => a.vistas - b.vistas)))
  }

  res.status(200).send(JSON.stringify(results))
})

server.get('/api/cursos/matematicas/:tema', (req, res) => {
  const tema = req.params.tema
  const results = infoCursos.matematicas.filter((curso) => curso.tema === tema)

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron temas de: ${tema}`)
  }

  res.status(200).send(JSON.stringify(results))
})
// --------------------------------
server.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
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
// -----------------------------------------------------------------------------------------
const APPORT = process.env.PORT || 3000

server.listen(APPORT, () => {
  console.log(`Listening on port: ${APPORT}`)
})
