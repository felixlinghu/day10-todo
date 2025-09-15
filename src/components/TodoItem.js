import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {updateTodo} from "../services/updateTodo";

export function TodoItem(props) {
  const {state, dispatch} = useContext(TodoContext)

  function makeAsDone() {
    updateTodo()
    .then(todo=>  dispatch({
      type: "TOGGLE_TODO",
      payload:todo
    }))
  }


  return <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""} onClick={makeAsDone}>
            {props.todo.text}
        </span>
  </div>;
}