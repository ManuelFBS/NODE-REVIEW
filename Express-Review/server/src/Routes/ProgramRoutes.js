const {
  getProgramHandler,
  getProgLanguageHandler,
  getProgLevelLanguageHandler
} = require('../Handlers/ProgHandlers/GetProgHandlers.js')

const router = require('express').Router()

router.get('/', getProgramHandler)
router.get('/:lenguaje', getProgLanguageHandler)
router.get('/:lenguaje/:nivel', getProgLevelLanguageHandler)

module.exports = router
