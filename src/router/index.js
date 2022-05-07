import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: ()=> import('@/views/Home') },
  { path: '/register', name: 'Register', component: ()=> import('@/views/auth/Register'),meta: {title: '注册'} },
  { path: '/login', name: 'Login', component: ()=> import('@/views/auth/Login'),meta: {title: '登录'} },
  { path: '/404', name: '404', component: ()=> import('@/views/error/404'), meta: {title: '页面不存在'} },
  { path: '*', redirect: '/404', hidden: true},
  { path: "/post/create", name: "post-create", component: () => import("@/views/post/Create"), meta: { title: "信息发布", requireAuth: true}},
  { path: '/post/:id', name: 'post-detail', component: () => import('@/views/post/Detail'), meta: {title: '详情' }
  // 编辑
  // { path: '/topic/edit/:id', name: 'topic-edit', component: () => import('@/views/post/Edit'), meta: {title: '编辑', requireAuth: true}
  },
]
//重写路由跳转方法，增加异常捕捉 .catch((err) => err)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes
})

export default router
