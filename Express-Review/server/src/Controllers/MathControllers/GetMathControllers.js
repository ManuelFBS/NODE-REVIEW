const { matematicas } = require('../../../../data/cursos.js').infoCursos

const getMathCourseController = () => {
  return matematicas
}

const getMathTopicController = (tema) => {
  const results = matematicas.filter((course) => course.tema === tema)

  return results
}

module.exports = {
  getMathCourseController,
  getMathTopicController
}
