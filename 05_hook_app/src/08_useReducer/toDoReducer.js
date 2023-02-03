export const toDoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "Add ToDo":
      return [...initialState, action.payload]
    case "Remove toDo":
      return initialState.filter(toDo => toDo.id !== action.payload)
    case "Toggle toDo":
      return initialState.map(toDo => toDo.id === action.payload ? ({...toDo, done: !toDo.done}) : (toDo)).sort((a, b) => a.id - b.id).sort((a, b) => a.done - b.done)
    default:
      return initialState
  }
}