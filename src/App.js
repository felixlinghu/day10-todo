import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";
import {MultipleTodo} from "./components/MultipleTodo";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {TodoDetailPage} from "./pages/TodoDetailPage";

function DefaultLayout() {
  return <div>
    <header>
      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/todos/1"}>1</NavLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
  </div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <MultipleTodo/>
      },
      {
        path: "/todos/:id",
        element: <TodoDetailPage/>
      }
    ]
  }
])

function HomePage() {
  return <div>
    <MultipleTodo/>
  </div>
}

export const initState = [
  {id: 1, text: "This is the first thing I need to do", done: false},
  {id: 2, text: "This is the second thing I need to do", done: false},
];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
      <div>
        <TodoContext1 value={{state, dispatch}}>
          <RouterProvider router={router}/>
        </TodoContext1>
      </div>
  );
}

export default App;