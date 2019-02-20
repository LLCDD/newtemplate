import store from '@/store'
import _ from 'lodash'

export function initUserInfo() {
    let token = _.toString(localStorage.getItem('token'))
    store.commit('setToken', token)
    let phone = _.toString(localStorage.getItem('phone'))
    let username = _.toString(localStorage.getItem('username'))
    let avatar = _.toString(localStorage.getItem('avatar'))
    let check = _.toString(localStorage.getItem('check'))
    store.commit('setUser', { phone, username, avatar, check })
}