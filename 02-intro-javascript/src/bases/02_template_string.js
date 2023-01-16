const nombre = 'Antonio'
const apellido = 'Perez'

// const nombre_completo = nombre + ' ' + apellido
const nombre_completo = `${nombre} ${apellido}
  ${1 + 1}`

console.log(nombre_completo);

const get_saludo = (nombre) => {
  return `Hola mundo ${nombre}`
}

console.log(`Esto es un texto: ${get_saludo(nombre)}`)