import {getUser, getUserActivo} from "../../src/base_pruebas/05_funciones.js";

describe("Pruebas en 05_funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      userName: "Admin"
    }

    const user = getUser()

    expect(user).toEqual(testUser)
  })

  test("getUsuario debe de retornar un objeto", () => {
    const testName = "Antonio"

    const usuarioActivo = getUserActivo(testName)

    expect(usuarioActivo).toEqual({
      uid: "ABC123",
      userName: testName
    })
  })
})