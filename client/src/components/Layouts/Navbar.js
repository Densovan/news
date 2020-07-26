import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
  return (
    <div>
      <div className="header">
        {/* <div className="logo" /> */}
        <div>
          <Menu
            style={{ paddingLeft: '20%', paddingRight: '20%' }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item style={{ float: 'left' }} key="3">
              Logo
            </Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="1">
              Login
            </Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="2">
              Sign Up
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
