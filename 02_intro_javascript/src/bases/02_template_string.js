const nombre = "Antonio"
const apellido = "Perez"

// const nombre_completo = nombre + " " + apellido
const nombreCompleto = `${nombre} ${apellido}
  ${1 + 1}`

console.log(nombreCompleto);

const getSaludo = (nombre) => {
  return `Hola mundo ${nombre}`
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`)