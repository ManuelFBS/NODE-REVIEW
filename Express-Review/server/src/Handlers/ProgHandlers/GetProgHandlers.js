const {
  getProgramCourseController,
  getProgLanguageController,
  getProgLevelLanguageController
} = require('../../Controllers/ProgControllers/GetProgControllers.js')
const { sortsMinToMax } = require('../../../../utils/Sorts.js')

const getProgramHandler = (req, res) => {
  try {
    const results = getProgramCourseController()
    return res.status(200).json(results)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

const getProgLanguageHandler = (req, res) => {
  const language = req.params.lenguaje
  try {
    const results = getProgLanguageController(language)

    if (req.query.ordenar === 'vistas') return sortsMinToMax(results, res)
    else return res.status(200).json(results)
  } catch (error) {
    return res.status(404).send(`No se ha encontrado el recurso: ${language}`)
  }
}

const getProgLevelLanguageHandler = (req, res) => {
  const lenguaje = req.params.lenguaje
  const nivel = req.params.nivel

  try {
    const results = getProgLevelLanguageController(lenguaje, nivel)
    return res.status(200).json(results)
  } catch (error) {
    return res
      .status(404)
      .send(`No se ha encontrado el recurso: ${language} de nivel: ${nivel}`)
  }
}

module.exports = {
  getProgramHandler,
  getProgLanguageHandler,
  getProgLevelLanguageHandler
}
