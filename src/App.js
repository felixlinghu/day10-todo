import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import axios from "axios";
import {router} from "./routers/Router";

const api=axios.create(
    {
      baseURL:"https://68c7ac8f5d8d9f51473287c4.mockapi.io/",
      headers:{
        "Content-Type": "application/json"
      },
      timeout: 5_000
    }
)

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