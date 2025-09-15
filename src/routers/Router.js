import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../components/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {MultipleTodo} from "../components/MultipleTodo";
import {TodoDetailPage} from "../pages/TodoDetailPage";

export const router = createBrowserRouter([
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