import React, { Component } from 'react'
import { Card } from 'antd'
import {Player} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

export default class index extends Component {
    render() {
        return (
            <div>
                <Card title="视频">
                    <Player className="screen" fluid={false} width={800} height={600}
                        playsInline
                        src="https://laoshiren.oss-cn-shanghai.aliyuncs.com/test.mp4">
                </Player>
            </Card>
            </div>
        )
    }
}
