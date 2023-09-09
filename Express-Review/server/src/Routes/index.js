const { Router } = require('express')
const welcome = require('./WelcomeRouter.js')
const courses = require('./CoursesRouters.js')
const progs = require('./ProgramRoutes.js')
const maths = require('./MathRoutes.js')

const router = Router()

router.use('/', welcome)
router.use('/api/cursos', courses)
router.use('/api/cursos/programacion', progs)
router.use('/api/cursos/matematicas', maths)

module.exports = router
