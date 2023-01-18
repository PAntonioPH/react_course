export const getImgKey = async () => {
  try {
    const apiKey = "DUeRvUV7LBUbA48oAm6evGiFsmmi7LLB"
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await res.json()

    const {url} = data.images.original

    return url
  } catch (err) {
    // console.error(err)
    return "No se encontró la imagen"
  }
}

export const getImg = async () => {
  try {
    const apiKey = ""
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await res.json()

    const {url} = data.images.original

    return url
  } catch (err) {
    // console.error(err)
    return "No se encontró la imagen"
  }
}
