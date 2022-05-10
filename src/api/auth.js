import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
    return request({
        url: '/ums/user/register',
        method: 'post',
        data: userDTO
    })
}
// 邮件发送
export function sendEmile(email) {
    return request({
        url: '/ums/user/getEmailCode',
        method: 'get',
        params: {
            email: email
        }
    })
}
// 前台用户登录
export function login(user) {
    return request({
        url: '/ums/user/login',
        method: 'post',
        data: user
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