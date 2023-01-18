const getImgPromesa = () => new Promise((resolve, reject) => resolve("https://www.google.com"))
getImgPromesa().then((console.log))

const getImg = async () => {
  try {
    const apiKey = "DUeRvUV7LBUbA48oAm6evGiFsmmi7LLB"
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await res.json()

    const {url} = data.images.original

    const img = document.createElement("img")
    img.src = url
    document.body.append(img)
  } catch (err) {
    console.error(err)
  }
}

getImg()
