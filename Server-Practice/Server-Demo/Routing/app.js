const PORT = 3000
const http = require('http')

const {
  handleGetRequest,
  handlePostRequest,
  handlePutRequest,
  handleDeleteRequest
} = require('../Modules/HandlersRequest.js')

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

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
})
