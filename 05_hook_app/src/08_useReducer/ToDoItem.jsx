import PropTypes from "prop-types";

export const ToDoItem = ({description, id, done, onDeleteToDo, onToggleToDo}) => {

  return (
    <li
      className={"list-group-item d-flex justify-content-between"}
    >
      <span
        className={`align-self-center ${done ? "text-decoration-line-through" : ""}`}
        onClick={() => onToggleToDo(id)}
      >
        {description}
      </span>

      <button
        className={"btn btn-danger"}
        onClick={() => onDeleteToDo(id)}
      >
        Borrar
      </button>
    </li>
  )
}

ToDoItem.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onToggleToDo: PropTypes.func.isRequired,
}