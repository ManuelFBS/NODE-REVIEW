const express = require('express')
const { programacion } = require('../../data/cursos.js').infoCursos
const routerProgramacion = express.Router()
const { sortsMinToMax } = require('../../utils/Sorts.js')

// Middleware...
routerProgramacion.use(express.json())

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion))
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const results = programacion.filter((curso) => curso.lenguaje === lenguaje)

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`)
  }

  if (req.query.ordenar === 'vistas') sortsMinToMax(results, res)
  else return res.status(200).send(JSON.stringify(results))
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje
  const nivel = req.params.nivel

  const results = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  )

  if (results.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron lenguajes: ${lenguaje} de nivel: ${nivel}`)
  }

  res.status(200).send(results)
})

routerProgramacion.post('/', (req, res) => {
  let newCourse = req.body

  programacion.push(newCourse)
  res.status(201).send(JSON.stringify(programacion))
})

module.exports = {
  routerProgramacion
}
