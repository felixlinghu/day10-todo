import {api} from "../api/mockApi";

export function updateTodo(props) {
  return api.put("/todos/" + props.todo.id, {done: !props.todo.done})
  .then(res => res.data);
}