import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { Layout, Menu,Icon ,Dropdown,Avatar } from 'antd';
import logo from './logo192.png';
import { dashboardRoutes } from '../../routes'
import { CaretDownOutlined,CloseCircleOutlined,SettingOutlined,NotificationOutlined} from '@ant-design/icons';
import './index.css'
import {clearToken} from '../../utils/auth2'

const { Header, Content, Sider } = Layout;
const routes = dashboardRoutes.filter(route => route.isShow)


class index extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  popMenu(){ 
    return(
    <Menu onClick={(p)=> {
      switch(p.key) {
        case 'noti':
          console.log("noti")
           break;
        case 'setting':
          console.log("setting")
           break;
        case 'logout':
          clearToken();
          this.props.history.push("/login")
          break;
        default:
           break;
   } 
    }}>
      <Menu.Item key="noti"><NotificationOutlined /> 通知</Menu.Item>
      <Menu.Item key="setting"><SettingOutlined /> 设置</Menu.Item>
      <Menu.Item key="logout" ><CloseCircleOutlined /> 退出</Menu.Item>
    </Menu>
  )
}
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" >
            <img src={logo} alt="log" style={{ height: 64 }} ></img>
            <span style={{ color: "#c3c3c3",fontWeight:900 }}>  My Shop  </span>
          </div>
          <div>
            <Dropdown overlay={this.popMenu()} >
              <div>
                <Avatar>S</Avatar>
                <span className="nickName">
                  超级管理员
                </span>
                <CaretDownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
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
                  <Menu.Item
                    key={route.path}
                    onClick={(p) => { this.props.history.push(p.key) }}>
                    {route.icon} <span>{route.title}</span>
                  </Menu.Item>
                )
              })
            }
            {/* 侧边栏路由循环遍历end */}


            </Menu>
          </Sider>
          <Layout style={{ padding: '10px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                background: "#fff",
                
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(index)
