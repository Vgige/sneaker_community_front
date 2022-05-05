import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
    return request({
        url: '/ums/user/register',
        method: 'post',
        data: userDTO
    })
}
// 前台用户登录
export function login(data) {
    return request({
        url: '/ums/user/login',
        method: 'post',
        data
    })
}
// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/ums/user/info',
        method: 'get'
    })
}
export function logout(){
    return request({
        url: '/ums/user/logout'
    })
}