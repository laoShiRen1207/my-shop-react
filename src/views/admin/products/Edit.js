import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'antd'
import { Form, Input } from 'antd';
import { FormOutlined,CloseCircleOutlined} from '@ant-design/icons';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '这个是必填项!',
  };

class Edit extends Component {

    constructor(props){
        super(props)
        
    }

    // 提交数据
    postForm(){
        console.log("")
    }

    render(){
        return (
            <div>
                <Card>
                    <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
                        <Form.Item
                            name={ 'name'}
                            label="名称"
                            rules={[{required: true,},]} >
                            <Input />
                        </Form.Item>
                        
                        <Form.Item name={'description'} label="描述">
                            <Input.TextArea />
                        </Form.Item>
                    

                        <Row justify="space-around">
                            <Col span={4}>
                                <Button type="primary" icon={<FormOutlined />}>提交</Button>
                            </Col>
                            <Col span={4}>
                                <Button type="default" onClick={this.props.myCancel} icon = {<CloseCircleOutlined />}>取消</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Edit
