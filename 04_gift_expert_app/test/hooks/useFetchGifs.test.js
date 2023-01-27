import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe de regresar el estado inicial", () => {
    const {result} = renderHook(() => useFetchGifs("One punch"))
    const {images, isLoading} = result.current

    expect(images).toHaveLength(0)
    expect(isLoading).toBeTruthy()
  })

  test("Debe de retornar un arreglo de imágenes y isLoadinf en false",async () => {
    const {result} = renderHook(() => useFetchGifs("One punch"))

    await waitFor(
      ()=> expect(result.current.images.length).toBeGreaterThan(0)
    )

    const {images, isLoading} = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})