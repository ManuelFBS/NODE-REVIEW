const {
  getAllCoursesController
} = require('../../Controllers/CoursesControllers/GetCoursesController.js')

const getAllCoursesHandler = (req, res) => {
  try {
    const course = getAllCoursesController()
    return res.status(200).json(course)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllCoursesHandler
}
