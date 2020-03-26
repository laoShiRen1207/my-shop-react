// 将access-token 放入请求头
import axios from 'axios'
import { getToken } from '../utils/auth2'

const instance = axios.create({
    baseURL: "http://127.0.0.1:5500/",
    timeout : 5000
})
// 全局请求和响应的拦截
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 加入access_token 
    config.headers['authorization']='Bearer '+ getToken()
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export function get(url,params) {
    return instance.get(url,{params});
}

export function post(url,data){
    return instance.post(url ,data)
}