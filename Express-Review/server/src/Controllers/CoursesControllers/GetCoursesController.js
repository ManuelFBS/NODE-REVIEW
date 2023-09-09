const infoCursos = require('../../../../data/cursos.js')
// const { programacion, matematicas } =
//   require('../../../../data/cursos.js').infoCursos

const getAllCoursesController = () => {
  return infoCursos
}

module.exports = {
  getAllCoursesController
}
