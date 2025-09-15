import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../services/useTodoService";

export function TodoItemGenerator() {
  const [input, setInput] = useState("");
  const {dispatch} = useContext(TodoContext);
  const {addTodo, deleteTodo, loadTodo, updateTodo} = useTodoService();

  function handleAdd() {

    if (input.trim() === "") {
      return;
    }
    addTodo({input}).then(todo => dispatch({
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