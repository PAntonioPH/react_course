import {getImg, getImgKey} from "../../src/base_pruebas/11_async_await.js";

describe("Pruebas en 11_async_await", () => {
  test("getImg debe de retornar un URL de la imagen", async () => {
    const url = await getImgKey()
    expect(typeof url).toBe("string")
  })

  test("getImg debe de retornar un error si no tenemos api key", async () => {
    const url = await getImg()
    expect(url).toBe("No se encontró la imagen")
  })
})