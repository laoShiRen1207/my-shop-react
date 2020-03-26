![react](https://img-blog.csdnimg.cn/20200308222613109.png)
![antd](https://img-blog.csdnimg.cn/20200316173557547.jpg)

## 使用react + AntDesign 开发一个后台dashboard 项目
效果图 -- 2020年03月16日17:30:48

![photo](https://github.com/laoShiRen1207/my-shop-react/blob/master/public/currentDemo.png)

### 说明
该项目适合入门级玩家，本人并非前端开发，所以会存在bug 或者并不合理的地方，还请指出。部分组件需要自行查找安装

开发进度
| 功能  | 开发进度                    | 备注   |
| -------- | ------------------------- | ----- |
| 基本框架     |  基本结束 |    |
| 路由      |  基本结束 |      |
| 请求      |  基本结束 | axios |
| 图片上传      |  开发中 |    |
| 复杂表单      |  未开始 |     |
| 富文本编辑器   |  开发中 |  braft-editor     |
| 图标信息      |  未开始   |    |


### 开发环境
~~~bash
node -v
## 输出
v10.15.3

npm -v
## 输出
6.4.1
~~~

~~~json
{
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "antd": "^4.0.2",
    "axios": "^0.19.2",
    "react": "^16.13.0",
    "react-avatar-editor": "^12.0.0-beta.0",
    "react-dom": "^16.13.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.0"
  }
}
~~~

### 项目结构

~~~bash
├── public                          // 公用模板
├── src                             // 源代码
│   ├── api                         // 所有请求                 （完成）
│   ├── assets                      // 存放图片等静态资源         （未完成）
│   ├── components                  // 全局公用组件              （开发中）
│   ├── mock                        // 项目mock 模拟数据         （未完成）
│   ├── routes                      // 路由                     （开发中）
│   ├── utils                       // 全局公用方法              （开发中）
│   ├── views                       // views                   （开发中）
│   ├── index.css                   // 全局css样式
│   ├── index.js                    // 入口js 初始化 加载组件等
│   ├── logo.svg                    // log图标
│   └── registerServiceWorker.js    // 本地创建service worker 
├── .gitignore                      // git 忽略项
├── package-lock.json               // package.json
└── package.json                    // package.json
~~~

### 使用项目
~~~bash
## clone
git clone https://github.com/laoShiRen1207/my-shop-react.git
## 进入项目
cd my-shop-react
## 安装依赖包 
npm install
## 启动服务 
npm start
## 打包构建 
npm run build
~~~

### 写在最后
求求你们给弟弟一个`star`吧

### 联系方式

| 联系方式  | 联系方式                    |
| -------- | ------------------------- |
| QQ       | 1027575422 `(备注Github)`  |
| email    | 15207034473@163.com       |
