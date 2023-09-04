const PORT = 3000
const http = require('http')
const { infoCursos } = require('./cursos.js')

const server = http.createServer((req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      return handleGetRequest(req, res)
    case 'POST':
      return handlePostRequest(req, res)
    case 'PUT':
      return handlePutRequest(req, res)
    case 'DELETE':
      return handleDeleteRequest(req, res)
    default:
      res.statusCode = 501
      return res.end(
        `El método ${method} no puede ser manejado por el servidor...`
      )
  }
})

function handleGetRequest(req, res) {
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

function handlePostRequest(req, res) {
  const path = req.url

  switch (path) {
    case '/cursos/programacion':
      return res.end(
        'El servidor recibió una solicitud POST para "/cursos/programacion"'
      )
    default:
      res.statusCode = 400
      return res.end('Ha ocurrido un error al tratar de realizar el POST...!')
  }
}

function handlePutRequest(req, res) {
  const path = req.url

  switch (path) {
    case '/cursos/programacion':
      return res.end(
        'El servidor recibió una solicitud PUT para "/cursos/programacion"'
      )
    default:
      res.statusCode = 400
      return res.end('Ha ocurrido un error al tratar de realizar el PUT...!')
  }
}

function handleDeleteRequest(req, res) {
  const path = req.url

  switch (path) {
    case '/cursos/programacion':
      return res.end(
        'El servidor recibió una solicitud DELETE para "/cursos/programacion"'
      )
    default:
      res.statusCode = 400
      return res.end('Ha ocurrido un error al tratar de realizar el DELETE...!')
  }
}

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
})
