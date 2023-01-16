const personajes = ["Goku", "Vegeta", "Trunks"]

const [p1, p2, p3] = personajes
console.log(p1, p2, p3);

const retornaArreglo = () => ["ABC", 123]

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

const usState = (valor) => ([
  valor,
  () => console.log("Hola mundo")
])

const [nombre, setNombre] = usState("Goku")
console.log(nombre);
setNombre()