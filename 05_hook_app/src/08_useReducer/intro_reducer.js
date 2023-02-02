const initialState = [{
  id: 1,
  toDo: "Recolectar la piedra del Alma",
  done: false,
}]

const toDoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TODO] add toDo":
      return [...state, action.payload]
  }

  return state
}

let toDos = toDoReducer()

const newToDo = {
  id: 2,
  toDo: "Recolectar la piedra del poder",
  done: false,
}

const addToDoAction = {
  type: "[TODO] add toDo",
  payload: newToDo,
}

toDos = toDoReducer(toDos, addToDoAction)

console.log(toDos);