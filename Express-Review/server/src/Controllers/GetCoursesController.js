const { infoCursos } = require('../../../data/cursos.js')

const getAllCourses = async () => {
  return infoCursos
}

module.exports = {
  getAllCourses
}
