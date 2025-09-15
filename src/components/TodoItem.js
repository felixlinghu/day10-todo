import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../services/useTodoService";

export function TodoItem(props) {
  const {state, dispatch} = useContext(TodoContext)
  const {addTodo, deleteTodo, loadTodo, updateTodo} = useTodoService();

  function makeAsDone() {
    updateTodo({todo: props.todo})
    .then(todo => dispatch({
      type: "TOGGLE_TODO",
      payload: todo
    }))
  }

  return <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""} onClick={makeAsDone}>
            {props.todo.text}
        </span>
  </div>;
}