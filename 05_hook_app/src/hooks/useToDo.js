import {toDoReducer} from "../08_useReducer/index.js";
import {useEffect, useReducer} from "react";

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem("toDos")) || []
}

export const useToDo = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }, [toDos])

  const toDosCount = toDos.length

  const pendingToDosCount = toDos.filter((toDo) => !toDo.done).length

  const handleNewToDo = (toDo) => {
    dispatch({
      type: "Add ToDo",
      payload: toDo
    })

  }
  const handleDeleteToDo = (id) => {
    dispatch({
      type: "Remove toDo",
      payload: id
    })

  }
  const onToggleToDo = (id) => {
    dispatch({
      type: "Toggle toDo",
      payload: id
    })

  }

  return {
    toDos,
    handleNewToDo,
    handleDeleteToDo,
    onToggleToDo,
    toDosCount,
    pendingToDosCount,
  }
}
