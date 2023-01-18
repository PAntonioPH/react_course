import {getHeroById} from "./08_imp_exp.js";

export const getHeroByIdAsync = (id) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)
      if (hero) {
        resolve(hero)
      } else {
        reject(`No se pudo encontrar el hero ${id}`)
      }
    }, 500)
  })
)
