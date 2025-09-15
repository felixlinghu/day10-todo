import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

export function TodoItem(props) {
  const {state, dispatch} = useContext(TodoContext)

  function makeAsDone() {
    api.put("/todos/"+props.todo.id,{ done: !props.todo.done})
    .then(res=>res.data)
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