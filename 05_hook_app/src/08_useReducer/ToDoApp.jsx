import {useReducer} from "react";
import {toDoReducer} from "./toDoReducer.js";
import {ToDoList} from "./ToDoList.jsx";
import {ToDoAdd} from "./ToDoAdd.jsx";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false
  },
  {
    id: new Date().getTime() + 100,
    description: "Recolectar la piedra del tiempo",
    done: false
  },
]

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, initialState)

  const handleNewToDo = (toDo) => {
    console.log({toDo});
  }

  return (
    <>
      <h1>ToDoApp: 10 - <small>Pendientes: 2</small></h1>
      <hr/>

      <div className={"row"}>
        <div className={"col-7"}>
          <ToDoList toDos={toDos}/>
        </div>

        <div className={"col-5"}>
          <h4>Agregar TODO</h4>
          <hr/>

          <ToDoAdd handleNewToDo={handleNewToDo}/>
        </div>

      </div>
    </>
  )
}