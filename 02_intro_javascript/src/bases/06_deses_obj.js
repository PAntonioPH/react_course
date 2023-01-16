const persona = {
  nombre: "Tonny",
  edad: 45,
  clave: "Ironman",
}

// const {nombre, edad, clave} = persona
// console.log(nombre, edad, clave);

const usContext = ({nombre, edad, clave, rango = "Capitan"}) => {
  console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latLng: {
      lat: 35.12345,
      lng: -35.12345,
    }
  }
}

const {nombreClave, anios, latLng: {lat, lng}} = usContext(persona)

console.log(nombreClave, anios, lat, lng);