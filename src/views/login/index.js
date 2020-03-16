import React, { Component } from 'react'
import { Card,Form, Input, Button, Checkbox,Row,Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'
import {isLogined,setToken} from "../../utils/auth2"

class Login extends Component {

    constructor(props){
        super(props)

        this.state={

        }
    }
    // 提交表单
    onFinish(values){
        
        console.log(values)
        // this.props.history.push("/admin/index")
        // 请求后需要一个access-token
        var access_token = "abc"
        setToken(access_token)
        this.props.history.push("/admin")
    }

    render(){
        return (
            <div style={{marginTop:150}}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Card bordered>
                            <Form
                                name="normal_login"
                                className="login-form"
                                style={{maxWidth: 300 }}
                                initialValues={{ remember: true }}
                                onFinish={value =>{this.onFinish(value)}}
                                >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: '输入账号' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: '输入密码' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住本人</Checkbox>
                                    </Form.Item>
            
                                    <a className="login-form-forgot" href="">
                                        忘记密码
                                    </a>
                                </Form.Item>
            
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{width:"100%"}} className="login-form-button">
                                    登录
                                    </Button>
                                    Or <a href="">注册</a>
                                </Form.Item>
                            </Form>  
                        </Card>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
    
}

export default Login
