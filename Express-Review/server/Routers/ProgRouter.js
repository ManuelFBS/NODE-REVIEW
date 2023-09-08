const express = require('express')
const { programacion } = require('../../data/cursos.js').infoCursos
const routerProgramacion = express.Router()
const { sortsMinToMax } = require('../../utils/Sorts.js')

// Middleware...
routerProgramacion.use(express.json())

// --------------------------- GET -----------------------------------------------
routerProgramacion.get('/', (req, res) => {
  res.send(programacion)
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje
  const results = programacion.filter((curso) => curso.lenguaje === lenguaje)

  if (results.length === 0) {
    return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`)
  }

  if (req.query.ordenar === 'vistas') sortsMinToMax(results, res)
  else return res.status(200).send(results)
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

// --------------------------- POST ---------------------------------------------
routerProgramacion.post('/', (req, res) => {
  const newCourse = req.body

  programacion.push(newCourse)
  res.send(JSON.stringify(programacion))
})

// ---------------------------- PUT ----------------------------------------------
routerProgramacion.put('/:id', (req, res) => {
  const updateCourse = req.body
  const id = req.params.id
  const index = programacion.findIndex((course) => course.id == id)

  if (index >= 0) {
    programacion[index] = updateCourse
  }

  res.status(200).send(programacion)
})

// ---------------------------- PATCH --------------------------------------------
routerProgramacion.patch('/:id', (req, res) => {
  const updatePatchCourse = req.body
  const id = req.params.id
  const index = programacion.findIndex((course) => course.id == id)

  if (index >= 0) {
    const courseToUpdate = programacion[index]
    Object.assign(courseToUpdate, updatePatchCourse)
  }

  res.status(200).send(JSON.stringify(programacion))
})

// ---------------------------- PATCH --------------------------------------------
routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id
  const index = programacion.findIndex((course) => course.id == id)

  if (index >= 0) {
    programacion.splice(index, 1)
  }

  res.status(200).send(JSON.stringify(programacion))
})

module.exports = {
  routerProgramacion
}
