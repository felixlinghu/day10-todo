import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {router} from "./routers/Router";
import {useTodoService} from "./services/useTodoService";

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const {addTodo, deleteTodo, loadTodo, updateTodo} = useTodoService();
  useEffect(() => {
    loadTodo().then(todos => dispatch({
      type: "LOAD_TODO",
      payload: todos,
    }))
  }, [dispatch])
  return (
      <div>
        <TodoContext.Provider value={{state, dispatch}}>
          <RouterProvider router={router}/>
        </TodoContext.Provider>
      </div>
  );
}

export default App;