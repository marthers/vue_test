import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)

const router = new Router({
  routes: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/view/Login/Login')// 动态引入语法，@是webpack支持的别名（alias）语法，用于快捷的匹配路径等
      },
      {
        path : '/home',
        name : 'Home',//命名路由(named routes）
        component: () => import('@/view/HomePage/home')
      }
  ]
});


const LOGIN_PAGE_NAME = 'Login';
//beforeEach全局路由钩子
router.beforeEach(
  (to,from,next) => {

    if(localStorage.getItem('token') && localStorage.getItem('token').length > 0) {
        if(to.name == LOGIN_PAGE_NAME) {
            next({
                name: 'home'
            });
        }else {
            next();
        }
    }
    //当前未登录
    else{
        console.log('当前未登录')
        console.log(next)
        if(to.name == LOGIN_PAGE_NAME) {
            next()
        }else {
            next({
                name: LOGIN_PAGE_NAME
            })
        }
    }
  }
)

export default router;