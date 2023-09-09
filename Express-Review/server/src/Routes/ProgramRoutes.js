const {
  getProgramHandler,
  getProgLanguageHandler
} = require('../Handlers/ProgHandlers/GetProgHandlers.js')

const router = require('express').Router()

router.get('/', getProgramHandler)
router.get('/:lenguaje', getProgLanguageHandler)

module.exports = router
