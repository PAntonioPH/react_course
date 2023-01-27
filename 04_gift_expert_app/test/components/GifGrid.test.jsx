import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";

describe("Pruebas en GifGrid", () => {
  const category = "One Punch"

  test("Debe de mostrar el loading inicialmente", () => {
    render(<GifGrid category={category}/>)

    expect(screen.getByText("Cargando..."))
    expect(screen.getByText(category))
  })

  test("Debe de mostrar item cuando se cargan las imágenes mediante", () => {

  })
})