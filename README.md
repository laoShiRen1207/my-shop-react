![react](https://img-blog.csdnimg.cn/20200308222613109.png)
![antd](https://github.com/laoShiRen1207/my-shop-react/blob/master/public/antd.jpg)

## 使用react + AntDesign 开发一个后台dashboard 项目
效果图 -- 2020年03月16日17:30:48

![photo](https://github.com/laoShiRen1207/my-shop-react/blob/master/public/currentDemo.png)

### 说明
该项目适合入门级玩家，只需要在`views`添加自己的页面,然后在`routes`添加对应的路由即可。所有请求需要经过`./src/api/request.js`发起，请求需要发送一个`access_token`，该`access_token`在登录过程中会保存。

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
## 进入项目
cd my-shop-react
## 安装依赖包 
npm install
## 启动服务 
npm start
## 打包构建 
npm build
~~~

### 写在最后
求求你们给弟弟一个`star`吧