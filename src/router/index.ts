import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
// 引入组件
import HomeView from '../views/HomeView.vue';
const isAuthenticated = true;
// 声明路由list
// TS的数组泛型：类型不定，可推断
const routes: Array<RouteRecordRaw> = [
  // 路由对象，必须有属性path, name, component
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/',
    name: 'index',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载，异步引入组件优化性能，因为只有用到路由页面，才会加载打包后的JS文件
    component: () => import('../views/AboutView.vue')
  }
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(), // hash模式的链接有#
  routes
})

// 路由守卫
// 只要进入某个路由前，就会执行此方法
router.beforeEach((to, from, next) => {
  // from 从哪个路由跳转
  // to 跳转到哪个路由
  // 只有调用执行next方法，页面才会被渲染，不然显示空白页面
  // console.log('跳转到某个路由');
  // console.log('to', to, typeof to);
  // console.log('from', from, typeof from);
  // console.log('next', next, typeof next);
  // 比如在这里判断用户是否登录
  // console.log('router', router, typeof router);
  // if (isAuthenticated) {
  //   router.push(to.path);
  // } else {
  //   router.push('/login');
  // }
  next();
})

export default router;