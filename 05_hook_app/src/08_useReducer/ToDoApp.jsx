import {useEffect, useReducer} from "react";
import {ToDoAdd, ToDoList, toDoReducer} from "./index"

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del alma",
  //   done: false
  // },
]

const init = () => {
  return JSON.parse(localStorage.getItem("toDos")) || []
}

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }, [toDos])

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

  return (
    <>
      <h1>ToDoApp: 10 - <small>Pendientes: 2</small></h1>
      <hr/>

      <div className={"row"}>
        <div className={"col-7"}>
          <ToDoList
            toDos={toDos}
            onDeleteToDo={handleDeleteToDo}
            onToggleToDo={onToggleToDo}
          />
        </div>

        <div className={"col-5"}>
          <h4>Agregar TODO</h4>
          <hr/>

          <ToDoAdd
            onNewToDo={handleNewToDo}
          />
        </div>

      </div>
    </>
  )
}