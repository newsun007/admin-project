import router from '@/router/index.js';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'

//路由导航守卫
router.beforeEach(async(to,from,next)=>{
    // if(token){
        
    // }else{
        // NProgress.start()

        //   Message.error({
        //     showClose: true,
        //     message: '错了哦，这是一条错误消息',
        //     type: 'error'
        //   })
   // }
   next()
}) 



