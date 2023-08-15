import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const WebsiteLayout = () => {
  return (
    <Layout>
      <Header>
        
        <div className="logo">
        {/* <span>Đăng ký <Link to="./signin"></Link></span> */}
          <img src="https://picsum.photos/100/50" alt="" />
          
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home page</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Category</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">Product</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login">Signin</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/Signup">SignUp</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '100px 50px' }}>
        <main>
          <Outlet />
        </main>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <img src="https://picsum.photos/1050/200" alt="" />
        <p>Code By Linhtkph13315</p>
      </Footer>
    </Layout>
  );
};

export default WebsiteLayout;
