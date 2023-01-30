import {render, screen} from "@testing-library/react";
import {GiftExpertApp} from "../src/GiftExpertApp.jsx";

describe("Pruebas en GiftExpertApp", () => {
  test("", () => {
    render(<GiftExpertApp/>)

    screen.debug()
  })
})