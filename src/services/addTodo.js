import {api} from "../api/mockApi";

export function addTodo(props){
  return  api.post("/todos",{ text:props.input.trim(), done: false})
  .then(res=>res.data)
}