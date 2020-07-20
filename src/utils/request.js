import axios from 'axios';
import {getToken} from '@/utils/cookie';
// import { stringify } from 'qs';
import {Message,MessageBox,Loading} from 'element-ui';

 console.log(process.env.VUE_APP_URL );//process.env.NODE_ENV
//对axios 进行组件封装
//设置  请求的api
  const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/c3a87b8915a0251e35c83d666b98f7a9/',
    timeout: 20000
  });
  //console.log(getToken())
  // service.interceptors.request.use(
  //   (config) => {
    
  //     // 兼容 post 跨域问题
  //     if (config.method === 'post') {
  //       // 修改 Content-Type
  //       config.headers['Content-Type'] =
  //         'application/x-www-form-urlencoded';
          
  //       // 将对象参数转换为序列化的 URL 形式（key=val&key=val）
  //       config.data = stringify(config.data);
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     console.log(error);
  //     return Promise.reject(error);
  //   }
  // );
var loadingInstance
// 请求拦截，请求拦截配置
service.interceptors.request.use(
  config => {
    // do something before request is sent
    
     loadingInstance = Loading.service({ fullscreen: true,text:"加载中",background:"#cccccc" });
  
    if (getToken()) {//是否有cookies
    
      config.headers['X-Token'] = getToken();
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
//请求响应拦截

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
   
    const res = response.data
    loadingInstance.close();
    return res
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   console.log(res)
    //  // return Promise.reject(new Error(res.message || 'Error'))
    
    // } else {
    //   return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

