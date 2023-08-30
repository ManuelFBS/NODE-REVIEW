function showTopic(topic) {
  console.log(`Estoy repasando conocimientos en ${topic}`)
}

console.log("Antes de 'setImmediate()'...")
setImmediate(showTopic, 'Node.js')
console.log("Después de 'setImmediate()'...")
