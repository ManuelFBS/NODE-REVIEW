const express = require('express')
const routerWelcome = express.Router()

routerWelcome.get('/', (req, res) => {
  res
    .status(200)
    .send('Bienvenido a mi primer Sevidor con Node.js y Express 💻')
})

module.exports = routerWelcome
