const {
  getMathCourseController,
  getMathTopicController,
  getMathLevelTopicController
} = require('../../Controllers/MathControllers/GetMathControllers.js')
const { sortsMinToMax } = require('../../../../utils/Sorts.js')

const getMathHandler = (req, res) => {
  try {
    const results = getMathCourseController()
    return res.status(200).json(results)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

const getMathTopicHandler = (req, res) => {
  const topic = req.params.tema

  try {
    const results = getMathTopicController(topic)

    if (req.query.ordenar === 'vistas') return sortsMinToMax(results, res)
    else return res.status(200).json(results)
  } catch (error) {
    return res.status(404).json(`No se ha encontrado el recurso: ${topic}`)
  }
}

const getMathLevelTopicHandler = (req, res) => {
  const tema = req.params.tema
  const nivel = req.params.nivel

  try {
    const results = getMathLevelTopicController(tema, nivel)

    return res.status(200).json(results)
  } catch (error) {
    return res
      .status(404)
      .send(`No se ha encontrado el recurso: ${tema} de nivel: ${nivel}`)
  }
}

module.exports = {
  getMathHandler,
  getMathTopicHandler,
  getMathLevelTopicHandler
}
