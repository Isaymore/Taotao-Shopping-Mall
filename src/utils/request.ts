import axios from 'axios'
import { Toast } from 'vant'

// 创建axios 实例
const service = axios.create({
    baseURL: 'https:xxx.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset:utf-8',
        'X-Custom-Header': 'foobar'
    }
})

// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    Toast.loading({
        message: '加载中...',
        forbidClick: true
    })
    // 必须要返回config,config是请求的配置信息对象
    return config
}, error => {
    // 对请求错误做些什么
    // 加return，返回一个失败的promise对象，不会执行当前函数后面的代码
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    Toast.clear()
    return response
}, error => {
    // 对响应错误做点什么
    Toast.clear()
    return Promise.reject(error)
})

// export default service

// 定义接口，声明对象属性的类型
interface configType {
    url: string,
    data?: any,
    headers?: any
}
// 导出 请求方法：get post put delete
export const get = (config: configType) => {
    return service({
        ...config,
        method: 'get',
        params: config.data
    })
}
export const post = (config: configType) => {
    return service({
        ...config,
        method: 'post',
        data: config.data
    })
}
export const put = (config: configType) => {
    return service({
        ...config,
        method: 'put',
        data: JSON.stringify(config.data)
    })
}
export const del = (config: configType) => {
    return service({
        ...config,
        method: 'delete'
    })
}

