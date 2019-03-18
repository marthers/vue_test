import Vue from 'vue'
import Router from 'vue-router';
import  Home  from './../components/index';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 动态引入语法，@是webpack支持的别名（alias）语法，用于快捷的匹配路径等
      // component: () => import('@/components/index')
      component : Home
    }
  ]
})
