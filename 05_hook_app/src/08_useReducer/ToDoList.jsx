import PropTypes from "prop-types";
import {ToDoItem} from "./index"

export const ToDoList = ({toDos, onDeleteToDo, onToggleToDo}) => {

  return (
    <ul className={"list-group"}>
      {toDos.map(({id, description, done}) => (
        <ToDoItem
          key={id}
          id={id}
          done={done}
          description={description}
          onDeleteToDo={onDeleteToDo}
          onToggleToDo={onToggleToDo}
        />
      ))}
    </ul>
  )
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onToggleToDo: PropTypes.func.isRequired,
}

ToDoList.defaultProps = {
  toDos: [],
}
