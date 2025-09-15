import {api} from "../api/mockApi";

export function addTodo(){
  return  api.post("/todos",{ text:input.trim(), done: false})
  .then(res=>res.data)
}