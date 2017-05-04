import App from '../App'

const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const shoplist = r => require.ensure([], () => r(require('../page/shoplist/shoplist')), 'shoplist')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')

import msite from '../page/msite/msite'
import spirit from '../page/spirit/spirit'
import newShops from '../page/newShops/newShops'
import phone from '../page/phone/phone'
import grab from '../page/grab/grab'

import productlist from '../page/productlist/productlist'
import confirmOrder from '../page/confirmOrder/confirmOrder'
import foreignwine from '../page/foreignwine/foreignwine'
import purple from '../page/purple/purple'
import profile from '../page/profile/profile'
import login from '../page/login/login'
import regist from '../page/regist/regist'

import order from '../page/order/order'
import dingdan from '../page/dingdan/dingdan'
import find from '../page/find/find'
import address from '../page/address/address'

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/msite'
        },       
        //所有商铺列表页
        {
            path: '/msite',
            component: msite
        },
        {
            path: '/phone',
            component: phone
        },
         {
            path: '/productlist',
            component: productlist
        },
        {
            path: '/address',
            component: address
        },
        //新品发布汇
        {
            path: '/newShops',
            component: newShops
        },
        //详情及订单
        {
            path: '/msite/:id',
            component: shoplist
        },
        //白酒页
        {
            path: '/spirit',
            component: spirit      
        },
          {
            path: '/dingdan',
            component: dingdan      
         },
         {
            path: '/confirmOrder',
            component: confirmOrder      
        },
        {
            path: '/purple',
            component: purple      
        },
        {
            path: '/foreignwine',
            component: foreignwine      
        },
        //掌上秒拍
        {
            path: '/grab',
            component: grab      
        },  
        //功能补充-排序      
        {
            path: '/food',
            component: food
        },
        //搜索页
        {
            path: '/search/:geohash',
            component: search
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
        {
            path: '/regist',
            component: regist
        },
        //个人信息页
        {
            path: '/profile',
            component: profile,
        },
        //订单列表页
        {
            path: '/order',
            component: order
        },
        //分类页
        {
            path: '/find',
            component: find
        }
    ]
}]