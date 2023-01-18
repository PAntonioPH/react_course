import {getHeroById, getHeroByOwner} from "../../src/base_pruebas/08_imp_exp.js";
import {heroes} from "../../src/data/heroes"

describe("Pruebas en 08_imp_exp", () => {
  test("getHeroesByID debe de retornar un héroe por ID", () => {
    const testId = 1

    const hero = getHeroById(testId)

    expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
  })

  test("getHeroesByID debe de retornar undefined si no existe", () => {
    const testId = 100

    const hero = getHeroById(testId)

    expect(hero).toBe(undefined)
    expect(hero).toBeFalsy()
  })

  test("getHeroByOwner debe de retornar un arreglo con los héroes de DC", () => {
    const testOwner = "DC"

    const heroes = getHeroByOwner(testOwner)

    expect(heroes).toEqual([
        {id: 1, name: 'Batman', owner: 'DC'},
        {id: 3, name: 'Superman', owner: 'DC'},
        {id: 4, name: 'Flash', owner: 'DC'}
      ]
    )

    expect(heroes).toEqual(heroes.filter(({owner}) => owner === testOwner))

    expect(heroes).toHaveLength(3)
    expect(heroes.length).toBe(3)
  })

  test("getHeroByOwner debe de retornar un arreglo con los héroes de Marvel", () => {
    const testOwner = "Marvel"

    const heroes = getHeroByOwner(testOwner)

    expect(heroes).toEqual([
        {id: 2, name: 'Spiderman', owner: 'Marvel'},
        {id: 5, name: 'Wolverine', owner: 'Marvel'}
      ]
    )

    expect(heroes).toEqual(heroes.filter(({owner}) => owner === testOwner))

    expect(heroes).toHaveLength(2)
    expect(heroes.length).toBe(2)
  })
})