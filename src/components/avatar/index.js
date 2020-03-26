import React,{Component} from 'react'
import { Card, Button,Upload } from 'antd'
import {  message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

class index extends Component {
    state = {
        loading: false,
        imageUrl: ""
    };
    
    componentDidMount(){
        this.setState({
            imageUrl: this.getAvatar()
        })
    }

    // 获取默认头像
    getAvatar(){
        return "https://laoshiren.oss-cn-shanghai.aliyuncs.com/ed51425e-b670-4cb0-84d2-c3a8a4d1dc09.png";
    }

    // 保存头像
    onClickSave(){
        console.log(this.state.imageUrl)
        // 应该将此处的图像地址传递给后台
    }

    handleChange(info){
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
            if ( 20000 === info.file.response.code ){
                this.setState({ loading: false });
                var srcUrl = info.file.response.data.path;
                this.setState({
                    imageUrl: srcUrl
                })
            } else {
                this.setState({ loading: false });
                message.error("图片上传失败")
            }
            return;
        }
    };

    render() {
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
        );

        const { imageUrl } = this.state;
        return (
            <div>
                <Card title="头像">
                    <div>
                        
                    <Upload
                        name="multipartFile"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="http://127.0.0.1:9000/upload"
                        onChange={info =>this.handleChange(info)} >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                        <Button type="primary" onClick={this.onClickSave.bind(this)} style={{width:210}} >
                           保存
                        </Button>
                    </div>

                </Card>

            </div>
        )
    }
}

export default index