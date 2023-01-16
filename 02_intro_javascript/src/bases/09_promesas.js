import {getHeroById} from "./bases/08_imp_exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2)
//     resolve(hero)
//     reject("No se pudo encontrar el hero")
//   }, 2000)
// })
//
// promesa
//   .then((hero) => {
//     console.log("Then de la promesa")
//     console.log(hero);
//   })
//   .catch(err => console.warn(err))

const getHeroByIdAsync = (id) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)
      if (hero) {
        resolve(hero)
      } else {
        reject("No se pudo encontrar el hero")
      }
    }, 2000)
  })
)

getHeroByIdAsync(3)
  // .then((hero)=> console.log(hero))
  .then(console.log)
  // .catch(err => console.warn(err))
  .catch(console.warn)