import React, { Component } from 'react'
import { Card, Table, Modal, Button, Row, Popconfirm } from 'antd';

import Edit from './Edit';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';



const columns = [
    {
        title: "序号",
        dataIndex: 'index',
        key: 'index',
        align: "center",
        // 加上序号
        render: (txt, record, index) => index + 1
    }, {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
    }, {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: "操作",
        render: (txt, record, index) => {
            return (<div>
                <Row justify="space-around">
                    <Button type="primary" size="small" >
                        <EditOutlined />编辑</Button>
                    {/* popconfirm 之后的2个事件以后用函数来完成 */}
                    <Popconfirm title="注意,是否确认删除？" onCancel={() => console.log("取消删除")} onConfirm={() => console.log("确定删除")}>
                        <Button size="small" type="danger">
                            <DeleteOutlined />删除</Button>
                    </Popconfirm>
                </Row>
            </div>)
        }
    }
];

const data = [];
for (let i = 0; i < 21; i++) {
    data.push({
        key: i,
        name: `Good ${i}`,
        price: 10.00,
        description: `Good’s description ${i}`,
    });
}

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: !this.state.visible });
    };

    render() {
        return (
            <div>
                <Card title="商品列表"
                    extra={
                        <Button onClick={this.showModal} type="primary" size="small" >新增</Button>
                    }>

                    {/* table 开始 */}
                    <Table bordered={true} dataSource={data} columns={columns} >

                    </Table>
                    {/* table 结束 */}
                    <Modal
                        title="编辑"
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        
                        footer = ""
                        destroyOnClose= "true">
                        
                        <Edit myCancel = {this.handleCancel}/>
                        
                    </Modal>
                </Card>

            </div>
        )
    }
}
export default List
