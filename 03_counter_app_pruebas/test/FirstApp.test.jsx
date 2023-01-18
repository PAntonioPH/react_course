import {render} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp.jsx";

describe("Pruebas en FirstApp", () => {
  // test("Debe de hacer match en el snapshot", () => {
  //   const testTitle = "Hola mundo"
  //   const {container} = render(<FirstApp title={testTitle}/>)
  //
  //   expect(container).toMatchSnapshot()
  // })

  test("Debe de mostrar el titilo en un h1", () => {
    const testTitle = "Hola mundo"
    const {container, getByText, getByTestId} = render(<FirstApp title={testTitle}/>)

    expect(getByText(testTitle)).toBeTruthy()

    // const h1 = container.querySelector("h1")
    //
    // expect(h1.innerHTML).toBe(testTitle)
    // expect(h1.innerHTML).toContain(testTitle)

    expect(getByTestId("testTitle")).toBeTruthy()
    expect(getByTestId("testTitle").innerHTML).toBe(testTitle)
    expect(getByTestId("testTitle").innerHTML).toContain(testTitle)
  })

  test("Debe de mostrar el subtitulo enviado por pros", () => {
    const testTitle = "Hola mundo"
    const testSubTitle = "Subtitulo"
    const {getByText, getAllByText} = render(<FirstApp title={testTitle} subTitle={testSubTitle}/>)

    // expect(getByText(testSubTitle)).toBeTruthy()
    expect(getAllByText(testSubTitle)).toHaveLength(2)
  })
})