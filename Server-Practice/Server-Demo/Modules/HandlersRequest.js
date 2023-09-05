const { infoCursos } = require('../Routing/cursos.js')

const handleGetRequest = (req, res) => {
  const path = req.url

  console.log(res.statusCode)

  switch (path) {
    case '/':
      return res.end(
        'Bienvenido a mi 1er Servidor y API creados con Node.js !!!'
      )
    case '/api/cursos':
      return res.end(JSON.stringify(infoCursos))
    case '/api/cursos/programacion':
      return res.end(JSON.stringify(infoCursos.programacion))
    case '/api/cursos/matematicas':
      return res.end(JSON.stringify(infoCursos.matematicas))
    default:
      res.statusCode = 404
      return res.end('Error... No existe el recurso solicitado...!')
  }
}

const handlePostRequest = (req, res) => {
  const path = req.url

  switch (path) {
    case '/api/cursos/programacion':
      let body = ''

      req.on('data', (content) => {
        body += content.toString()
      })

      req.on('end', () => {
        console.log(body)
        console.log(typeof body)

        // Convertir a un objeta JavaScript...
        body = JSON.parse(body)

        console.log(typeof body)
        console.log(body.titulo)

        res.end(
          'El servidor recibió una solicitud POST para "/api/cursos/programacion"'
        )
      })
      break
    default:
      res.statusCode = 400
      return res.end('Ha ocurrido un error al tratar de realizar el POST...!')
  }
}

const handlePutRequest = (req, res) => {
  const path = req.url

  switch (path) {
    case '/api/cursos/programacion':
      return res.end(
        'El servidor recibió una solicitud PUT para "/api/cursos/programacion"'
      )
    default:
      res.statusCode = 400
      return res.end('Ha ocurrido un error al tratar de realizar el PUT...!')
  }
}

const handleDeleteRequest = (req, res) => {
  const path = req.url

  switch (path) {
    case '/api/cursos/programacion':
      return res.end(
        'El servidor recibió una solicitud DELETE para "/api/cursos/programacion"'
      )
    default:
      res.statusCode = 400
      return res.end('Ha ocurrido un error al tratar de realizar el DELETE...!')
  }
}

module.exports = {
  handleGetRequest,
  handlePostRequest,
  handlePutRequest,
  handleDeleteRequest
}
