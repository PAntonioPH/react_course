import {useState} from "react";
import PropTypes from "prop-types";

export const ToDoAdd = ({handleNewToDo}) => {
  const [inputValue, setInputValue] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()

    if (inputValue.trim().length === 0) return

    handleNewToDo({
      id: new Date().getTime(),
      description: inputValue,
      done: false
    })

    setInputValue("")
  };

  const onInputChangue = ({target}) => {
    setInputValue(target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type={"text"}
        placeholder={"¿Qué hay que hacer?"}
        className={"form-control"}
        value={inputValue}
        onChange={onInputChangue}
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