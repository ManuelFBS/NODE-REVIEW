const express = require('express')
const { infoCursos } = require('../../api/cursos.js')
const routerCursos = express.Router()

routerCursos.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

module.exports = {
  routerCursos
}
