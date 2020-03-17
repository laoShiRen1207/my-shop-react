import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { mainRoutes } from './routes'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css"

ReactDOM.render(<HashRouter>
    <Switch>
        {/* 访问以admin 开头的路由都用 App 组件 */}
        <Route path="/admin" render={routeProps => <App {...routeProps} />}></Route>
        {mainRoutes.map(route => {
            // <Route key = {route.path} {...route}></Route>
            return <Route key={route.path} path={route.path} component={route.component}></Route>
        })}
        <Redirect to="/404" ></Redirect>
    </Switch>
</HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
