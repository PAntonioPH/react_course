import PropTypes from "prop-types";
import {ToDoItem} from "./index"

export const ToDoList = ({toDos}) => {
  console.log(toDos);

  return (
    <ul className={"list-group"}>
      {toDos.map(({id, description}) => (<ToDoItem key={id} description={description}/>))}
    </ul>
  )
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

ToDoList.defaultProps = {
  toDos: []
}
