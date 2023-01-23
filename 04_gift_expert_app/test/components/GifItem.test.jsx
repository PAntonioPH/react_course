import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components/index.js";

describe("Pruebas de GifItem", () => {
  const testTitle = "Naruto"
  const testUrl = "https://media3.giphy.com/media/naruto"

  test("De de hacer match con el snapshot", () => {
    const {container} = render(<GifItem title={testTitle} url={testUrl}/>)

    expect(container).toMatchSnapshot()
  })

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={testTitle} url={testUrl}/>)
    // screen.debug()
    // expect(screen.getByRole("img").alt).toBe(testTitle)

    const {src, alt} = screen.getByRole("img")

    expect(src).toBe(testUrl)
    expect(alt).toBe(testTitle)
  })

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={testTitle} url={testUrl}/>)

    const {innerHTML} = screen.getByText(testTitle)
    expect(screen.getByText(testTitle)).toBeTruthy()
    expect(innerHTML).toBe(testTitle)
  })
})