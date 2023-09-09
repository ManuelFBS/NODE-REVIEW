const {
  getAllCoursesHandler,
  getProgramHandler,
  getMathHandler
} = require('../Handlers/GetCoursesHandler')

const router = require('express').Router()

router.get('/', getAllCoursesHandler)
router.get('/programacion/', getProgramHandler)
router.get('/matematicas', getMathHandler)

module.exports = router
