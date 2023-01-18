import {getHeroByIdAsync} from "../../src/base_pruebas/09_promesas.js";

describe("Pruebas en 09_promesas", () => {
  test("getHeroByIdAsync debe de retornar un héroe", (done) => {
    const testId = 1

    getHeroByIdAsync(testId)
      .then((hero) => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        })

        done()
      })
  })

  test("getHeroByIdAsync debe de obtener un errror si el héroe no existe", (done) => {
    const testId = 100

    getHeroByIdAsync(testId)
      .then((hero)=>{
        expect(hero).toBeFalsy()

        done()
      })
      .catch((err)=>{
        expect(err).toBe(`No se pudo encontrar el hero ${testId}`)

        done()
      })
  })
})