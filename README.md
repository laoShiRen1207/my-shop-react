![在这里插入图片描述](https://img-blog.csdnimg.cn/20200308222613109.png)
![](https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg)

## 使用react + AntDesign 开发一个后台dashboard 项目
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
│   ├── api                         // 所有请求                 （未完成）
│   ├── assets                      // 存放图片等静态资源         （未完成）
│   ├── components                  // 全局公用组件              （开发中）
│   ├── mock                        // 项目mock 模拟数据         （未完成）
│   ├── routes                      // 路由                     （开发中）
│   ├── utils                       // 全局公用方法              （未完成）
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