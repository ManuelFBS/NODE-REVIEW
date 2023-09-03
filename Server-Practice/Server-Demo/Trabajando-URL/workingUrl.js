const myURL = new URL(
  'https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1'
)

console.log(myURL.hostname)

console.log(myURL.pathname)

console.log(myURL.searchParams)

console.log(typeof myURL.searchParams)

console.log(myURL.searchParams.get('ordenar'))

console.log(myURL.searchParams.get('nivel'))
