const {
  getMathHandler,
  getMathTopicHandler,
  getMathLevelTopicHandler
} = require('../Handlers/MathHandlers/GetMathHandlers.js')

const router = require('express').Router()
router.get('/', getMathHandler)
router.get('/:tema', getMathTopicHandler)
router.get('/:tema/:nivel', getMathLevelTopicHandler)

module.exports = router
