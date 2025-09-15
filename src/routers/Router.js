import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../components/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {MultipleTodo} from "../components/MultipleTodo";
import {TodoDetailPage} from "../pages/TodoDetailPage";
import {DonePage} from "../pages/DonePage";
import {AboutUsPage} from "../pages/AboutUsPage";

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
      },
      {
        path: "/done",
        element: <DonePage/>
      },
      {
        path: "/about",
        element: <AboutUsPage/>
      }
    ]
  }
])