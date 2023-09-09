const { matematicas } = require('../../../../data/cursos.js').infoCursos

const getMathCourseController = () => {
  return matematicas
}

const getMathTopicController = (tema) => {
  const results = matematicas.filter((course) => course.tema === tema)

  return results
}

const getMathLevelTopicController = (tema, nivel) => {
  const results = matematicas.filter(
    (curso) => curso.tema === tema && curso.nivel === nivel
  )

  if (results.length === 0) {
    throw Error
  }

  return results
}

module.exports = {
  getMathCourseController,
  getMathTopicController,
  getMathLevelTopicController
}
