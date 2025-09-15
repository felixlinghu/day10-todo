import {api} from "../api/mockApi";

export function loadTodo() {
  return api.get("/todos")
  .then(response => response.data);
}