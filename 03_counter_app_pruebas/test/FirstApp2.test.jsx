import {render, screen} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp.jsx";

describe("Pruebas en FirstApp", () => {
  const testTitle = "Hola mundo"

  test("Debe de hacer match con el snapshot", () => {
    const {container} = render(<FirstApp title={testTitle}/>)

    expect(container).toMatchSnapshot()
  })

  test("Debe de mostrar el mensaje 'Hola mundo'", () => {
    render(<FirstApp title={testTitle}/>)

    // expect(screen.getByText(testTitle)).not.toBeTruthy()
    // !expect(screen.getByText(testTitle)).toBeTruthy()
    expect(screen.getByText(testTitle)).toBeTruthy()
  })

  test("Debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={testTitle}/>)

    expect(screen.getByRole("heading", {level: 1}).innerHTML).toBe(testTitle)
  })
})