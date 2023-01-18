import {usContext} from "../../src/base_pruebas/06_deses_obj";

describe("Pruebas en 06_deses_obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const testPersona = {
      edad: 45,
      clave: "Ironman",
    }

    const context = usContext(testPersona)

    expect(context).toEqual({
      nombreClave: testPersona.clave,
      anios: testPersona.edad,
      latLng: {
        lat: 35.12345,
        lng: -35.12345,
      }
    })
  })
})