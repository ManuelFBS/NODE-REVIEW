const {
  getAllCoursesController,
  getProgramCourseController,
  getMathCourseController
} = require('../Controllers/GetCoursesController')

const getAllCoursesHandler = (req, res) => {
  try {
    const course = getAllCoursesController()
    return res.status(200).json(course)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getProgramHandler = (req, res) => {
  try {
    const results = getProgramCourseController()
    return res.status(200).send(results)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

const getMathHandler = (req, res) => {
  try {
    const results = getMathCourseController()
    return res.status(200).send(results)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
// const getLanguageHandler = (req, res) => {
//   const language = req.params
//   try {
//     const results = getLanguageController(language)

//     if (req.query.ordenar === 'vistas') sortsMinToMax(results, res)
//     else return res.status(200).send(results)
//   } catch (error) {
//     return res.status(404).send(`No se ha encontrado el recurso: ${language}`)
//   }
// }

module.exports = {
  getAllCoursesHandler,
  getProgramHandler,
  getMathHandler
}
