import {useEffect, useState} from "react";
import {getGifs} from "../helpers/GifGrid.js";
import {GifGridItem} from "./GifGridItem.jsx";

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category)
      .then((images) => setImages(images))
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <div className={"card-grid"}>
        {images.map((image) => (
          <GifGridItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}