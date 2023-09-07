const express = require('express')
const { infoCursos } = require('../../data/cursos.js')
const routerCursos = express.Router()

routerCursos.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

module.exports = {
  routerCursos
}
