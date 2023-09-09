const router = require('express').Router()

router.get('/welcome', (req, res) => {
  res
    .status(200)
    .send(
      'Bienvenido a mi Sevidor para prácticas, hecho con Node.js y Express 💻'
    )
})

module.exports = router
