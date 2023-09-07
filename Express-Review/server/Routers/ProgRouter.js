const express = require('express')
const { infoCursos } = require('../../data/cursos.js')
const routerProgramacion = express.Router()
const { sortsMinToMax } = require('../../utils/Sorts.js')

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

module.exports = {
  routerProgramacion
}
