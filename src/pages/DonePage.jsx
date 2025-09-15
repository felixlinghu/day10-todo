import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function DonePage() {
  const {state} = useContext(TodoContext);
  const doneTodos = state.filter(todo => todo.done);
  
  return (
    <div>
      <h2>Completed Todos</h2>
      {doneTodos.length === 0 ? (
        <div className="todo-empty">No completed todos yet.</div>
      ) : (
        doneTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))
      )}
    </div>
  );
}