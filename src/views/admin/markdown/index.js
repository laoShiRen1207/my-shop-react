import React, { Component } from 'react'
import { Card } from 'antd'
import {Form,Input,Option,Tooltip,Cascader,Radio,Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

// 页面排版
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};



export default class index extends Component {
    
    constructor(props){
        super(props)
        this.state ={

        }
    }

    // 标签变换
    handleTagsChange(value) {
        console.log(`selected ${value}`);

    }

    // 专题变换
    handleColumnChange(value){
        this.setState({
            columnValue: value.target.value
        })
    }
    
    handleEditorChange(value){
        console.log(value.toHTML())
    }

    render() {

        const input = '# This is a header\n\nAnd this is a paragraph'
        
        return (
            <div>
                <Card title = "文章 / MarkDown">
                    <Form name="markdownform"
                        {...formItemLayout}>

                            <Form.Item name="article_tile" label="标题" >
                                <Input placeholder="文章的标题" />
                            </Form.Item>

                            <Form.Item name="article_tags" label="标签">
                                <Select placeholder="标签" mode="tags" onChange={this.handleTagsChange}>
                                    {this.state.tags}
                                </Select>
                            </Form.Item>
                    
                            <Form.Item name="article_column" label="专题">
                                <Radio.Group name="radiogroup" onChange={this.handleColumnChange.bind(this)} defaultValue={1}>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>
                                        {this.state.columnValue!==4 ? "More...": "" }
                                        {this.state.columnValue === 4 ? 
                                        <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                            
                            <Form.Item name="article" label="正文" >
                                <BraftEditor value={this.state.editorState} onChange={this.handleEditorChange.bind(this)} />
                            </Form.Item>
                    </Form>

                </Card>
            </div>
        )
    }
}
