const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar_2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar_3 = (nombre) => `Hola, ${nombre}`

const saludar_4 = () => `Hola mundo`

console.log(saludar('Antonio'));
console.log(saludar_2('Pablo'));
console.log(saludar_3('David'));
console.log(saludar_4('David'));

const get_user = () => ({
  uid: 'ABC123',
  user_name: 'Admin'
})

const user = get_user()
console.log(user);

const get_user_activo = (nombre) => ({
  uid: 'ABC123',
  user_name: nombre
})

const usuario_activo = get_user_activo('Fernando')
console.log(usuario_activo);