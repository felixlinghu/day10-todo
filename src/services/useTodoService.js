import {api} from "../api/mockApi";

export function useTodoService() {
  function addTodo(props) {
    return api.post("/todos", {text: props.input.trim(), done: false})
    .then(res => res.data)
  }

  function deleteTodo(item) {
    return api.delete("/todos/" + item.id,);
  }

  function loadTodo() {
    return api.get("/todos")
    .then(response => response.data);
  }

  function triggerTodo(props) {
    return api.put("/todos/" + props.todo.id, {done: !props.todo.done})
    .then(res => res.data);
  }
  function updateTodo(props){
    return api.put("/todos/" + props.todo.id, {id: props.todo.id,text: props.todo.text})
    .then(res => res.data);
  }

  return {addTodo, deleteTodo, loadTodo, updateTodo,triggerTodo}
}