import {ToDoAdd, ToDoList} from "./index"
import {useToDo} from "../hooks/index.js";

export const ToDoApp = () => {
  const {onToggleToDo, handleDeleteToDo, handleNewToDo, toDos, toDosCount, pendingToDosCount} = useToDo()

  return (
    <>
      <h1>ToDoApp: {toDosCount} - <small>Pendientes: {pendingToDosCount}</small></h1>
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