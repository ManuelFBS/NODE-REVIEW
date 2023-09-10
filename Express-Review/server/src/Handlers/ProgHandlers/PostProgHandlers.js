const {
  postProgramCourseController
} = require('../../Controllers/ProgControllers/PostProgControllers.js')

const postProgramCourseHandler = (req, res) => {
  const newCourse = req.body

  try {
    const results = postProgramCourseController(newCourse)

    return res.status(201).json(results)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

module.exports = {
  postProgramCourseHandler
}
