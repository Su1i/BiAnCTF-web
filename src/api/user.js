import requests from "@/axios";
import qs from 'qs'

/**
 * 获取当前登录用户的信息
 * @returns {AxiosPromise}
 */
export function getMe() {
    return requests({
        url: '/api/user/getMe',
        method: 'get',
    })
}

/**
 * 邮箱登录接口
 * @param email
 * @param password
 * @returns {AxiosPromise}
 */
export function login({email, password}) {
    return requests({
        url: '/api/user/emailLogin',
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify({
            email,
            password,
        })
    })
}

/**
 * 邮箱注册接口
 * @param newUsername
 * @param newPassword
 * @param newPasswordR
 * @returns {AxiosPromise}
 */
export function register(email, userName, password, checkPwd) {
    return requests({
        url: '/api/user/emailRegister',
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify({
            'email': email,
            'userName': userName,
            'password': password,
            'checkPwd': checkPwd,
        })
    })
}

/**
 * 用户退出
 * @returns {AxiosPromise}
 */
export function logout() {
    return requests({
        url: '/api/logout',
        method: 'get',
    })
}

/**
 * 更新用户数据
 * @param user
 * @returns {AxiosPromise}
 */
export function updateUser(user) {
    return requests({
        url: '/api/user',
        method: 'post',
        data: qs.stringify({
            action: 'update',
            data: JSON.stringify(user)
        })
    })
}

/**
 * 获取所有用户信息（管理员）
 * @returns {AxiosPromise}
 */
export function getAllUser() {
    return requests({
        url: '/api/user',
        method: 'get',
    })
}

/**
 * 添加一个新的用户（管理员）
 * @param user
 * @returns {AxiosPromise}
 */
export function saveUser(user) {
    return requests({
        url: '/api/user',
        method: 'post',
        data: qs.stringify({
            action: 'save',
            data: JSON.stringify(user)
        })
    })
}

/**
 * 删除一个用户
 * @param user 只需有uid属性即可 根据uid删除
 * @returns {AxiosPromise}
 */
export function removeUser(user) {
    return requests({
        url: '/api/user',
        method: 'post',
        data: qs.stringify({
            action: 'remove',
            data: JSON.stringify(user)
        })
    })
}

/**
 * 分页查询用户
 * @param pageSize
 * @param pageNum
 * @returns {AxiosPromise}
 */
export function getAllUserByPage(pageSize, pageNum) {
    return requests({
        url: `/api/user/${pageSize}/${pageNum}`,
        method: 'get'
    })
}

export function getUserByUidForUser(uid) {
    return requests({
        url: `/api/user/${uid}`,
        method: 'get'
    })
}

export function searchUserPage(key, value, pageSize, pageNum) {
    return requests({
        url: `/api/user/search/${pageSize}/${pageNum}`,
        method: 'get',
        params: {
            key: key,
            value: value
        }
    })
}
