const { programacion } = require('../../../../data/cursos.js').infoCursos

const getProgramCourseController = () => {
  return programacion
}

const getProgLanguageController = (lenguaje) => {
  const results = programacion.filter((course) => course.lenguaje === lenguaje)

  return results
}

module.exports = {
  getProgramCourseController,
  getProgLanguageController
}
