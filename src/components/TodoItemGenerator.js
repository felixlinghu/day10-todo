import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

export function TodoItemGenerator() {
  const [input, setInput] = useState("");
  const {dispatch} = useContext(TodoContext);

  function handleAdd() {
    if (input.trim() === "") {
      return;
    }
    api.post("/todos",{ text:input.trim(), done: false})
    .then(res=>res.data)
    .then(todo=> dispatch({
      type: "ADD_TODO",
      payload: todo,
    }))

    setInput("");
  }

  return (
      <div className={"todo-add"}>
        <input
            type="text" value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" className={"todo-add-button"} onClick={handleAdd}>add</button>
      </div>
  );
}