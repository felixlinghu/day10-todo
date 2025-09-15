import {NavLink, Outlet, useLocation} from "react-router";
import "./LayoutStyles.css";
import {Layout, Menu, theme} from "antd";
import {useState} from "react";

const {Header, Content, Footer} = Layout;

export function DefaultLayout() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <NavLink to={"/"}>Home</NavLink>,
      key: '/',
    },
    {
      label: <NavLink to={"/done"}>Done</NavLink>,
      key: '/done',
    },
    {
      label: <NavLink to={"/about"}>About Us</NavLink>,
      key: '/about',
    }
  ];

  return (
      <Layout style={{minHeight: '100vh'}}>
        <Header className={"todo-header"}>
          <Menu 
            theme="dark" 
            mode="horizontal" 
            selectedKeys={[current]} 
            items={items} 
            onClick={onClick}
            style={{flex: 1, minWidth: 0}}
          />
        </Header>
        <Content style={{padding: '0 48px', marginTop: '24px'}}>
          <div className={"todo-container"}>
            <Outlet/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          @Copyright Felix
        </Footer>
      </Layout>
  );
}