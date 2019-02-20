import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'
import store from './store'
Vue.use(Router)

let router = new Router({
    // redirect重定向
    // meta 可以在页面中用$route.meta来获取里面的数据
    routes: [
        { path: '', redirect: '/home' },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "login" */ './components/login/login'),
            meta: {
                requiresAuth: false,
                titleshow: -1,
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    store.commit('settitle', to.meta)
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (!getToken()) {
            next({ path: '/login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router