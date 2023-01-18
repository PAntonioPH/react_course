import {getSaludo} from "../../src/base_pruebas/02_template_string.js";

describe("Pruebas en 02_template_string", () => {
  test("getSaludo debe de retornar 'Hola Antonio'", () => {
    const testName = "Antonio"
    const message = getSaludo(testName)

    expect(message).toBe(`Hola ${testName}`)
  })
});