const {
  getAllCoursesHandler
} = require('../Handlers/CoursesHandlers/GetCoursesHandler.js')

const router = require('express').Router()

router.get('/', getAllCoursesHandler)

module.exports = router
