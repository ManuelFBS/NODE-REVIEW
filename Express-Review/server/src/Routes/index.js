const { Router } = require('express')
const courses = require('./CoursesRouters.js')
const welcome = require('./WelcomeRouter.js')

const router = Router()

router.use('/', welcome)
router.use('/api/cursos', courses)

module.exports = router
