const { programacion, matematicas } =
  require('../../../data/cursos.js').infoCursos
const { sortsMinToMax } = require('../../../utils/Sorts.js')

const getAllCoursesController = () => {
  return infoCursos
}

const getProgramCourseController = () => {
  return programacion
}

const getMathCourseController = () => {
  return matematicas
}
// const getLanguageController = (lenguaje) => {
//   const results = programacion.filter((course) => course.lenguaje === lenguaje)

//   return results
// }

module.exports = {
  getAllCoursesController,
  getProgramCourseController,
  getMathCourseController
}
