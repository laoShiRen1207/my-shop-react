// 路由分为2类
// 第一类是404 这种不需要验证的
// 第二种是dashboard 需要验证过后才能访问的
import React from 'react'


import Login from "../views/login/index"
import PageNotFound from "../views/PageNotFound"
import Avatar from "../components/avatar/index"
import Home from "../views/admin/dashboard/index"
import List from "../views/admin/products/List"
import Edit from "../views/admin/products/Edit"
import Video from "../views/admin/video"
import Article from "../views/admin/markdown"

import { AreaChartOutlined,ShopOutlined} from '@ant-design/icons';


export const mainRoutes = [
    {
        path: '/login',
        component: Login
    }, {
        path: '/404',
        component: PageNotFound
    }, {
        path: '/avatar',
        component: Avatar
    }
]


export const dashboardRoutes = [
    {
        path: '/admin',
        component: Home,
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
        // id 作为可选参数
        path: '/admin/products/edit/:id?',
        component: Edit,
        isShow: false,
    }, {
        // id 作为可选参数
        path: '/admin/products/v',
        component: Video,
        isShow: true,
        exact: true,
        title: "视频",
        icon: <ShopOutlined />
    }, {
        // id 作为可选参数
        path: '/admin/products/markdown',
        component: Article,
        isShow: true,
        exact: true,
        title: "文章",
        icon: <ShopOutlined />
    }
]