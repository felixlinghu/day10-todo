import {NavLink, Outlet} from "react-router";
import "./LayoutStyles.css"
import {Flex} from "antd";
export function DefaultLayout() {
  return <div >
    <header className={"todo-header"}>
      <nav>
        <ul>
          <Flex gap="middle" vertical>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/todos/1"}>1</NavLink></li>
          </Flex>
        </ul>
      </nav>
    </header>
    <main className={""}>
      <Outlet/>
    </main>
    <footer className={"footerStyle"}>
      @Copyright Felix
    </footer>
  </div>;
}