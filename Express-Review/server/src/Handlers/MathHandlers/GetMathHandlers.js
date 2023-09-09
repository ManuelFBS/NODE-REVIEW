const {
  getMathCourseController,
  getMathTopicController
} = require('../../Controllers/MathControllers/GetMathControllers.js')
const { sortsMinToMax } = require('../../../../utils/Sorts.js')

const getMathHandler = (req, res) => {
  try {
    const results = getMathCourseController()
    return res.status(200).send(results)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

const getMathTopicHandler = (req, res) => {
  const topic = req.params.tema

  try {
    const results = getMathTopicController(topic)

    if (req.query.ordenar === 'vistas') return sortsMinToMax(results, res)
    else return res.status(200).send(results)
  } catch (error) {
    return res.status(404).send(`No se ha encontrado el recurso: ${topic}`)
  }
}

module.exports = {
  getMathHandler,
  getMathTopicHandler
}
