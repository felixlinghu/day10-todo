import {api} from "../api/mockApi";

export function deleteTodo(item) {
  return api.delete("/todos/" + item.id,);
}