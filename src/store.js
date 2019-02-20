import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        navshow: false,
        titleshow: false,
        storageEngine: localStorage,
        title: '',
        titleright: '',
        avatar: '',
        phone: '',
        check: '',
        PullTo: {
            topload(loaded) {
                setTimeout(() => {
                    loaded('done');
                }, 1000);
            },
            topbounce: false,
            topConfig: {
                pullText: '下拉刷新', // 下拉时显示的文字
                triggerText: '释放更新', // 下拉到触发距离时显示的文字
                loadingText: '加载中...', // 加载中的文字
                doneText: '加载完成', // 加载完成的文字
                failText: '加载失败', // 加载失败的文字
                loadedStayTime: 100, // 加载完后停留的时间ms
                stayDistance: 50, // 触发刷新后停留的距离
                triggerDistance: 50 // 下拉刷新触发的距离
            },
            bottomload(loaded) {
                setTimeout(() => {
                    loaded('done');
                }, 1000);
            },
            bottombounce: false,
            bottomConfig: {
                pullText: '加载更多',
                triggerText: '释放加载',
                loadingText: '加载中...',
                doneText: '加载完成',
                failText: '加载失败',
                loadedStayTime: 100,
                stayDistance: 50,
                triggerDistance: 50
            },

        },
    },
    mutations: {
        setUser(state, payload) {
            let { avatar, check, phone, username } = payload
            state.check = check
            state.phone = phone
            state.username = username
            state.avatar = avatar
            localStorage.setItem('phone', phone)
            localStorage.setItem('check', check)
            localStorage.setItem('username', username)
            localStorage.setItem('avatar', avatar)
        },
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        setAvatar(state, avatar) {
            state.avatar = avatar
            localStorage.setItem('avatar', avatar)
        },
        setphone(state, phone) {
            state.phone = phone
            localStorage.setItem('phone', phone)
        },
        setnavshow(state) {
            state.navshow = true
        },
        falsenavshow(state) {
            state.navshow = false
        },
        settitle(state, payload) {
            state.title = payload.title
            state.titleright = payload.titleright
            state.titleshow = payload.titleshow;
        },
        reviseavart(state, ployted) {
            localStorage.setItem('avatar', ployted)
            state.avatar = ployted
        },
    },
    actions: {
        login({ commit, state, dispatch }, payload) {
            let { Authorization, avatar, phone, username, check } = payload
            commit('setToken', Authorization)
            commit('setUser', { avatar, phone, username, check })
        }
    }
})