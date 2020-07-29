import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input, Popover } from 'antd';
import { AudioOutlined, DownOutlined } from '@ant-design/icons';

const Navbar = () => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
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
              <Popover content={content} title="Title" >
                NEWS
                <DownOutlined style={{ marginLeft: '5px', fontSize: '10px' }} />
              </Popover>

            </Menu.Item>
            <Menu.Item style={{ float: 'left' }} key="4">
              JOBS

            </Menu.Item>
            <Menu.Item style={{ float: 'left' }} key="5">
              COMPANIES

            </Menu.Item>
            <Menu.Item style={{ float: 'left' }} key="6">
              EVENT

            </Menu.Item>
            <Menu.Item style={{ float: 'left' }} key="7">
              ABOUT

            </Menu.Item>
            <Menu.Item
              style={{
                float: 'right',
                hover: 'none',
                border: 'none',
                background: 'none',
                cursor: 'none',
              }}
            >
              <Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                style={{
                  width: 200,
                  //   float: 'right',
                  borderRadius: '22px',
                  margin: 'auto',
                }}
              />
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
