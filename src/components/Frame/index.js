import React from 'react'

import { Layout,Button,Menu, Breadcrumb } from 'antd';
import { NotificationOutlined,SmileOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import logo from './logo192.png';
import {dashboardRoutes} from '../../routes'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = dashboardRoutes.filter(route =>route.isShow)
function index(props) {

    return (
        <Layout>
    <Header className="header">
      <div className="logo" >
          <img src= {logo} alt= "log" style={{height:64}} ></img>
          <span style={{color:"#c3c3c3" }}>  My Shop  </span>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
        

      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {/* <SubMenu
            key="sub3"
            title={
              <span>
                <NotificationOutlined />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
          </SubMenu> */}
          
          {/* 侧边栏路由循环遍历 start*/}
          {
            routes.map(route => {

              return (
                <Menu.Item key = {route.path}  >
                  <span>
                    {route.title}
                  </span>
                </Menu.Item>
              )

            })
          }

          {/* 侧边栏路由循环遍历end */}


        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            background:"#fff",
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default index
