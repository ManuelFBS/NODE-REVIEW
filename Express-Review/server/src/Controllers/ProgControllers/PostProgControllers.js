const { programacion } = require('../../../../data/cursos.js').infoCursos

const postProgramCourseController = (course) => {
  programacion.push(course)

  return programacion
}

module.exports = {
  postProgramCourseController
}
