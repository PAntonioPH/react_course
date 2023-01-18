import {retornaArreglo} from "../../src/base_pruebas/07_deses_arr.js";

describe("Pruebas en 07_deses_arr", () => {
  test("Debe de retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo()

    expect(letters).toBe("ABC")
    expect(numbers).toBe(123)

    expect(typeof letters).toBe("string")
    expect(typeof numbers).toBe("number")

    expect(letters).toEqual(expect.any(String))
  })
})