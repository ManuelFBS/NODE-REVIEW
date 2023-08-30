const fs = require('fs')
/*fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      // console.log(err)
      throw err
    } else {
      console.log(content)
      return
    }
    // En caso de ocurrir un error y se está manejando con 'console.log()'...
    console.log('Este mensaje solo se mostrará, si no')
    console.log('se está utilizando "throw err" , lo que')
    console.log('significa que la ejecución NO SE DETIENE...!')
})*/

console.log('Antes de leer un archivo...')
// Lee el contenido de un archivo...
fs.readFile('index.html', 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  console.log(content)
})
console.log('Después de leer un archivo...')
// --------------------------------------------------------------------------------------

// Renombra un archivo...
fs.rename('index.html', 'main.html', (err) => {
  if (err) throw err

  console.log('El archivo ha sido renombrado exitosamente...!')
})
console.log('Despues de renombrar un archivo...')
// --------------------------------------------------------------------------------------

// Agrega contenido al final del archivo
fs.appendFile('main.html', '<p>Hola</p>', (err) => {
  if (err) throw err

  console.log('Archivo actualizado...')
})
console.log('Despues de agregar contenido a un archivo...')
// --------------------------------------------------------------------------------------

// Sobreescribe un archivo...
fs.writeFile('main.html', 'Contenido nuevo...', (err) => {
  if (err) throw err

  console.log('Contenido reemplazado exitosamente...!')
})
console.log('Despues de sobreescribir un archivo...')
// --------------------------------------------------------------------------------------

// Elimina un archivo...
fs.unlink('main.html', (err) => {
  if (err) throw err

  console.log('Archivo eliminado de forma exitosa !')
})
console.log('Despues de eliminar un archivo...')
