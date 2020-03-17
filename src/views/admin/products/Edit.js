import React, { Component } from 'react'
import { Card, Button, Row, Col, message } from 'antd'
import { Form, Input } from 'antd';
import { FormOutlined,CloseCircleOutlined} from '@ant-design/icons';


const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };
const validateMessages = {
    required: '',
};

class Edit extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    // 提交数据
    handleSubmit(values){
        // 后期使用axios 请求数据
        console.log(values);
    }
    
    // 验证表单
    validateForm(param) {
        message.error(param.errorFields[0].name+"的值不符合规范！")
    }

    render(){
        return (
            <div>
                <Card>
                    <Form onFinish={values => this.handleSubmit(values)} 
                        name="productEdit" 
                        {...layout}  
                        onFinishFailed = { param => this.validateForm(param)}
                        validateMessages={validateMessages}>
                        <Form.Item
                            name={ 'name'}
                            label="名称"
                            rules={[{required: true,},]} >
                            <Input placeholder="输入商品名称" />
                        </Form.Item>
                        
                        <Form.Item name={'description'} label="描述">
                            <Input.TextArea placeholder="描述"/>
                        </Form.Item>
                    
                        <Form.Item>
                            <Row justify="space-around">
                                <Col span={4}>
                                    <Button htmlType="submit" type="primary"  icon={<FormOutlined />}>提交</Button>
                                </Col>
                                <Col span={4}>
                                    <Button type="default" onClick={this.props.myCancel} icon = {<CloseCircleOutlined />}>取消</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Edit
