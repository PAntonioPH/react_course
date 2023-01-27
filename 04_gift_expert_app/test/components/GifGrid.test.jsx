import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

jest.mock("../../src/hooks/useFetchGifs.js")

describe("Pruebas en GifGrid", () => {
  const category = "One Punch"

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category}/>)

    expect(screen.getByText("Cargando..."))
    expect(screen.getByText(category))
  })

  test("Debe de mostrar item cuando se cargan las imágenes mediante", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "www.saitama.com"
      },
      {
        id: "123",
        title: "Saitamas",
        url: "www.saitamas.com"
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category}/>)

    expect(screen.getAllByRole("img")).toHaveLength(2)
  })
})