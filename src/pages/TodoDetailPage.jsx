import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext as TodoContext1} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDetailPage() {
  const {id} = useParams();
  const {state, dispatch} = useContext(TodoContext1)
  const todo = state.filter((todo) => todo.id === id);
  if (todo.length === 0) {
    return <div>Not Found</div>
  }
  return <div>
    <TodoItem todo={todo[0]} index={id}/>
  </div>
}