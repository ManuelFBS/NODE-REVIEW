const {
  getMathHandler,
  getMathTopicHandler
} = require('../Handlers/MathHandlers/GetMathHandlers.js')

const router = require('express').Router()
router.get('/', getMathHandler)
router.get('/:tema', getMathTopicHandler)

module.exports = router
