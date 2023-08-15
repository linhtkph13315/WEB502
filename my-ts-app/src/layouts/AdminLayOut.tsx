// // import React, { ReactNode } from 'react';
// // import { Layout, Menu } from 'antd';
// // import { Link, Outlet } from 'react-router-dom';
// // import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

// // const { Header, Content, Sider } = Layout;

// // interface AdminLayoutProps {
// //   children: ReactNode;
// // }

// // const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
// //   return (
// //     <Layout style={{ minHeight: '100vh' }}>
// //       <Sider
// //         collapsible
// //         breakpoint="lg"
// //         collapsedWidth="0"
// //         onBreakpoint={(broken) => {
// //           console.log(broken);
// //         }}
// //         onCollapse={(collapsed, type) => {
// //           console.log(collapsed, type);
// //         }}
// //       >
// //         <div className="logo" />
// //         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
// //           <Menu.Item key="1" icon={<UserOutlined />}>
// //             Product<Link to="/admin/product"></Link>
// //           </Menu.Item>
// //           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
// //             Category
// //           </Menu.Item>
// //           <Menu.Item key="3" icon={<UploadOutlined />}>
// //             User
// //           </Menu.Item>
// //         </Menu>
// //       </Sider>
// //       <Layout>
// //         <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
// //         <Content style={{ margin: '24px 16px 0' }}>
// //           <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
// //             {children}
// //           </div>
// //             <main>
// //             <Outlet/>
// //             </main>
// //         </Content>
// //       </Layout>
// //     </Layout>
// //   );
// // };

// // export default AdminLayout;
// import React, { ReactNode } from 'react';
// import { Layout, Menu } from 'antd';
// import { Link, Outlet } from 'react-router-dom';
// import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

// const { Header, Content, Sider } = Layout;

// interface AdminLayoutProps {
//   children: ReactNode;
// }

// const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider
//         collapsible
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="logo" style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             <Link to="/admin/product">Product</Link>
//           </Menu.Item>
//           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             <Link to="/admin/category">Category</Link>
//           </Menu.Item>
//           <Menu.Item key="3" icon={<UploadOutlined />}>
//             <Link to="/admin/user">User</Link>
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//         <Content style={{ margin: '24px 16px 0' }}>
//           <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//             {children}
//           </div>
//           <main>
//             <Outlet />
//           </main>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default AdminLayout;

import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={200} // Set the width of the Sider
      >
        <div className="logo" style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ marginTop: '20px' }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/product">Product</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/admin/category">Category</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/admin/user">User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0, background: '#fff', textAlign: 'center' }}>
          {/* Add header content here */}
          <h1>Admin</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0', background: '#fff' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
          <main>
            <Outlet />
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

