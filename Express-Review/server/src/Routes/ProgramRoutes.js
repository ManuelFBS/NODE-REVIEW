const {
  getProgramHandler,
  getProgLanguageHandler,
  getProgLevelLanguageHandler
} = require('../Handlers/ProgHandlers/GetProgHandlers.js')
const {
  postProgramCourseHandler
} = require('../Handlers/ProgHandlers/PostProgHandlers.js')

const router = require('express').Router()

router.get('/', getProgramHandler)
router.post('/', postProgramCourseHandler)
router.get('/:lenguaje', getProgLanguageHandler)
router.get('/:lenguaje/:nivel', getProgLevelLanguageHandler)

module.exports = router
