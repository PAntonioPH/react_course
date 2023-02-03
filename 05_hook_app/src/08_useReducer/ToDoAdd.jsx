import PropTypes from "prop-types";
import {useForm} from "../hooks/index.js";

export const ToDoAdd = ({handleNewToDo}) => {
  const {onInputChange, onResetForm, description} = useForm({
    description: ""
  })

  const onSubmit = (event) => {
    event.preventDefault()

    if (description.trim().length === 0) return

    handleNewToDo({
      id: new Date().getTime(),
      description: description,
      done: false
    })

    onResetForm()
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type={"text"}
        placeholder={"¿Qué hay que hacer?"}
        className={"form-control"}
        value={description}
        name={"description"}
        onChange={onInputChange}
      />

      <button
        type={"submit"}
        className={"btn btn-outline-primary mt-1"}
      >
        Agregar
      </button>
    </form>
  )
}

ToDoAdd.propTypes = {
  handleNewToDo: PropTypes.func.isRequired
}