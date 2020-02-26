import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/components/Login/login')), 'login')//登录
const index = r => require.ensure([], () => r(require('@/components/Index')), 'index')//主页面

Vue.use(Router)


export default new Router({
  routes: [
   {
      path: '/',
      component: login,
      meta:{
        title:'数矿科技后台系统'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: index,
      meta:{
        title:'数矿科技后台系统'
      }
    }
  ]
})
