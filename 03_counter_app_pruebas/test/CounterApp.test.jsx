import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp.jsx";

describe("Pruebas de CounterApp", () => {
  const testInicialValue = 100

  test("Debe de hacer match con el snapshot", () => {
    const {container} = render(<CounterApp value={testInicialValue}/>)

    expect(container).toMatchSnapshot()
  })

  test("Debe de mostrar el valor inicial de 100", () => {
    const {container} = render(<CounterApp value={testInicialValue}/>)

    expect(screen.getByText(testInicialValue)).toBeTruthy()
    expect(screen.getByRole("heading", {level: 2}).innerHTML).toContain(`${testInicialValue}`)
  })

  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={testInicialValue}/>)

    fireEvent.click(screen.getByText("+1"))

    expect(screen.getByText(`${testInicialValue + 1}`))
  })

  test("Debe de decrementar con el botón -1", () => {
    render(<CounterApp value={testInicialValue}/>)

    fireEvent.click(screen.getByText("-1"))

    expect(screen.getByText(`${testInicialValue - 1}`))
  })

  test("Debe de funcionar el botón de reset", () => {
    render(<CounterApp value={testInicialValue}/>)

    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))

    // fireEvent.click(screen.getByText("Reset"))
    fireEvent.click(screen.getByRole("button", {name: "btnReset"}))

    expect(screen.getByText(`${testInicialValue}`))
  })
})