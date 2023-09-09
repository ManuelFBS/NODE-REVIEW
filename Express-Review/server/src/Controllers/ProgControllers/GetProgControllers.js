const { programacion } = require('../../../../data/cursos.js').infoCursos

const getProgramCourseController = () => {
  return programacion
}

const getProgLanguageController = (lenguaje) => {
  const results = programacion.filter((course) => course.lenguaje === lenguaje)

  return results
}

const getProgLevelLanguageController = (lenguaje, nivel) => {
  const results = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  )

  if (results.length === 0) {
    throw Error
  }

  return results
}

module.exports = {
  getProgramCourseController,
  getProgLanguageController,
  getProgLevelLanguageController
}
