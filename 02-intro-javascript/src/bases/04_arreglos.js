const arreglo = [1, 2, 3, 4]

// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// arreglo.push(5)

let arreglo_2 = [...arreglo, 5]

const arreglo_3 = arreglo_2.map((number) => number * 2)

console.log(arreglo);
console.log(arreglo_2);
console.log(arreglo_3);