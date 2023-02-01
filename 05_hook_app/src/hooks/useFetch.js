import {useEffect, useState} from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  })

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true
    })

    try {
      const res = await fetch(url)
      const data = await res.json()

      setState({
        data,
        isLoading: false,
        hasError: false,
      })
    } catch (e) {
      setState({
        ...state,
        hasError: true
      })
    }
  }

  useEffect(() => {
    getFetch().catch(() => {
      setState({
        ...state,
        hasError: true
      })
    })
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}