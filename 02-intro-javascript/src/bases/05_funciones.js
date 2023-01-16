const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = () => `Hola mundo`

console.log(saludar("Antonio"));
console.log(saludar2("Pablo"));
console.log(saludar3("David"));
console.log(saludar4("David"));

const getUser = () => ({
  uid: "ABC123",
  userName: "Admin"
})

const user = getUser()
console.log(user);

const getUserActivo = (nombre) => ({
  uid: "ABC123",
  userName: nombre
})

const usuarioActivo = getUserActivo("Fernando")

console.log(usuarioActivo);