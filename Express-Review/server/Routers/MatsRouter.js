const express = require('express')
const { matematicas } = require('../../data/cursos.js').infoCursos
const routerMatematicas = express.Router()
const { sortsMinToMax } = require('../../utils/Sorts.js')

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema
  const results = matematicas.filter((curso) => curso.tema === tema)

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron temas de: ${tema}`)
  }

  if (req.query.ordenar === 'vistas') sortsMinToMax(results, res)
  else res.status(200).send(JSON.stringify(results))
})

module.exports = {
  routerMatematicas
}
