import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    /** 是否跳过统一错误处理 */
    skipErrorHandler?: boolean;
  }
}

const request = axios.create({
  timeout: 35000,
  // baseURL: REACT_APP_API_URL,
  // withCredentials: true, // 跨域请求时是否发送Cookie
});

// 响应拦截器
request.interceptors.response.use(
  /**
   * 通过业务状态码判断请求状态
   * errcode errCode errmsg errMsg: 是为了兼容历史接口
   */
  (response: AxiosResponse) => {
    const res = response.data;
    return res;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default request;
