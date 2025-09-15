import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {router} from "./routers/Router";
import {api} from "./api/mockApi";

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  useEffect(()=>{
    api.get("/todos")
    .then(response=>response.data)
    .then(todos=>dispatch({
      type:"LOAD_TODO",
      payload:todos,
    }))
  },[dispatch])
  return (
      <div>
        <TodoContext.Provider value={{state, dispatch}}>
          <RouterProvider router={router}/>
        </TodoContext.Provider>
      </div>
  );
}

export default App;