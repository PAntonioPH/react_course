const persona = {
  nombre: "Tonny",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: "12345",
    lat: 35.12345,
    lng: 35.12345,
  }
}

// console.table(persona);
// console.log(persona);

const persona2 = {...persona}

persona.nombre = "Peter"

console.log(persona);
console.log(persona2);
