// 路由分为2类
// 第一类是404 这种不需要验证的
// 第二种是dashboard 需要验证过后才能访问的
import React from 'react'


import Login from "../views/Login"
import PageNotFound from "../views/PageNotFound"

import Index from "../views/admin/Dashboard/Index"
import List from "../views/admin/products/List"
import Edit from "../views/admin/products/Edit"

import { AreaChartOutlined,ShopOutlined} from '@ant-design/icons';


export const mainRoutes = [
    {
        path: '/login',
        component: Login
    }, {
        path: '/404',
        component: PageNotFound
    }
]


export const dashboardRoutes = [
    {
        path: '/admin',
        component: Index,
        exact: true,
        isShow: true,
        title: "控制面板",
        icon: <AreaChartOutlined />
    }, {
        path: '/admin/products',
        component: List,
        isShow: true,
        exact: true,
        title: "商品列表",
        icon: <ShopOutlined />
    }, {
        path: '/admin/products/edit/:id',
        component: Edit,
        isShow: false,
    }
]