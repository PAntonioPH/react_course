export const usContext = ({edad, clave}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latLng: {
      lat: 35.12345,
      lng: -35.12345,
    }
  }
}
