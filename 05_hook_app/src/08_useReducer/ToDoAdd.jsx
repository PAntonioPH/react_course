import PropTypes from "prop-types";
import {useForm} from "../hooks/index.js";

export const ToDoAdd = ({onNewToDo}) => {
  const {onInputChange, onResetForm, description} = useForm({
    description: ""
  })

  const onFormSubmit = (event) => {
    event.preventDefault()

    if (description.trim().length < 1) return

    onNewToDo({
      id: new Date().getTime(),
      description: description,
      done: false
    })

    onResetForm()
  };

  return (
    <form onSubmit={onFormSubmit}>
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
  onNewToDo: PropTypes.func.isRequired
}