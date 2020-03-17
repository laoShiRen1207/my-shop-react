import React,{Component} from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Card } from 'antd'
import { Slider } from 'antd';

class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            scaleNum:1.0,
            rotateNum:0
        }
    }

    // 放大图片
    formatter(value) {
        var scaleTimes = value/100.0;
        scaleTimes = scaleTimes+1.0;
        var param = {
            scaleNum: scaleTimes
        }
        this.setState(param)
    }
    // 旋转
    rotateValue(value) {
        var rotateVal = value
        var param = {
            rotateNum: rotateVal
        }
        this.setState(param)
    }

    showTip(value){
        return `${value}°C`;
    }

    render() {
        return (
            <div>
                <Card title="头像">
                    <div style={{width:210}}>
                        <AvatarEditor
                            image="https://img-blog.csdnimg.cn/20200308222613109.png"
                            width={200}
                            height={200}
                            border={5}
                            color={[0, 0, 0, 0.6]} // RGBA
                            scale={ this.state.scaleNum }
                            rotate={ this.state.rotateNum } />
                            
                        <Slider onAfterChange={this.formatter.bind(this)} tipFormatter={this.showTip} />
                        <Slider max={360} onAfterChange={this.rotateValue.bind(this)} tipFormatter={this.showTip} />
                    </div>
                </Card>
            </div>
        )
    }
}

export default index