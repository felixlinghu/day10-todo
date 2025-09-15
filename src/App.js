import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";
import {MultipleTodo} from "./components/MultipleTodo";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";

function DefalutLayout() {
  return <div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
  </div>
}

function ErrorPage() {
  const error = useRouteError();
  return <div>
    {error.status === 404 ?
        <div className={"not-found"}>
          <h1>
        <span>
          Try
        </span>
          </h1>
        </div> : <div>{JSON.stringify("error")}
        </div>
    }
  </div>
}

const browserRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <DefalutLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: "/",
            element: <MultipleTodo/>
          }
        ]
      }
    ]
);
export const initState = [
  {id: 1, text: "This is the first thing I need to do", done: false},
  {id: 2, text: "This is the second thing I need to do", done: false},
];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
      <div>

        <TodoContext1 value={{state, dispatch}}>
          <RouterProvider router={browserRouter}></RouterProvider>
        </TodoContext1>
      </div>
  );
}

export default App;