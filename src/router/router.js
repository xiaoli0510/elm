import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')),'profile')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
const vipcard = r => require.ensure([], () => r(require('../page/vipcard/vipcard')),'vipcard')
const invoiceRecord = r => require.ensure([], () => r(require('../page/vipcard/children/invoiceRecord')),'invoiceRecord')
const userCart = r => require.ensure([], () => r(require('../page/vipcard/children/useCart')),'userCart')
const vipDescription = r => require.ensure([], () => r(require('../page/vipcard/children/vipDescription')),'vipDescription')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const payment = r => require.ensure([], () =>r(require('../page/confirmOrder/children/payment')),'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')),'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/children/setusername')),'setusername')
const address = r => require.ensure([], ()=> r(require('../page/profile/children/children/address')),'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')),'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')),'addDetail')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')),'balance');
const balanceDetail = r => require.ensure([], () => r(require('../page/balance/children/detail')),'balanceDetail')
const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')),'benefit')
const coupon = r => require.ensure([], () => r(require('../page/benefit/children/coupon')),'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/children/hbDescription')),'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')),'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')),'commend')
const points = r => require.ensure([] , () => r(require('../page/points/points')),'points')
const pointsDetail = r => require.ensure([] , () => r(require('../page/points/children/detail')),'pointsDetail')
const service = r => require.ensure([], () => r(require('../page/service/service')),'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service/children/questionDetail')), 'questionDetail')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const download = r => require.ensure([], () => r(require('../page/download/download')),'download')




export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //所有商铺列表页
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        //特色商铺列表页
        {
            path: '/food',
            component: food
        },
        //搜索页
        {
            path: '/search/:geohash',
            component: search
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //食品详情页
                component: foodDetail,
            }, {
                path: 'shopDetail', //商铺详情页
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //商铺安全认证页
                    component: shopSafe,
                }, ]
            }]
        },
        //确认订单页
        {
           path:'/confirmOrder',
           component:confirmOrder,
           children:[{
               path:'payment',//付款页面
               component:payment,
           }]
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
       //个人信息页
       {
           path:'/profile',
           component:profile,
           children:[{
               path:'info',//个人信息详情页
               component:info,
               children:[{
                   path:'setusername',
                   component:setusername,
               },{
                   path:'address',
                   component:address,
                   children:[{
                       path:'add',
                       component:add,
                       children:[{
                           path:'addDetail',
                           component:addDetail
                       }]
                   }]
               }]
               
           }]
       },
        //修改密码页
        {
            path: '/forget',
            component: forget
        },
        //订单列表页
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }]
        },
        //vip会员卡
        {
          path:'/vipcard',
          component:vipcard,  
          children:[{
              path:'vipDescription',//会员说明
              component:vipDescription,
          },{
              path:'useCart',//使用卡号卡密
              component:userCart,
          },{
              path:'invoiceRecord',//购买记录
              component:invoiceRecord,
          }]
        },
        //发现页
        {
            path: '/find',
            component: find
        },
        //下载页
        {
            path: '/download',
            component: download
        },
        //服务中心
        {
          path:'/service',
          component:service,
          children:[{
              path:'questionDetail',
              component:questionDetail,
          }]
        },
        //余额
        {
          path:'balance',
          component:balance,
          children:[{
              path:'detail',//余额说明
              component:balanceDetail,
          }]
        },
        //我的优惠券
        {
          path:'benefit',
          component:benefit,
          children:[{
              path:'hbDescription',//红包说明
              component:hbDescription,
          },
          {
            path:'coupon',//代金券说明
            component:coupon,
          },
          {
            path:'exchange',//兑换红包
            component:exchange,
          }
          ,
          {
            path:'commend',//兑换红包
            component:commend,
          }
          ]
        },
        //我的积分页
        {
            path: 'points',
            component: points,
            children:[{
                path:'detail',
                component:pointsDetail
            }]
        },
        //我的积分页
        {
          path:'points',
          component:points,
        },
        //下载
        {
            path:'download',
            component:download,
        }
    ]
}]
