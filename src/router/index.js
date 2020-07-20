import Vue from 'vue';
import Router from 'vue-router';

 import Layout from '@/layout/index.vue';

Vue.use(Router);
//没有权限的路由
export const routes=[{
        path:'/',
        component: Layout,
        name:'index'
    },{
        path: '/login/:id/:use', component: ()=>import('@/pages/login/login.vue'),
        name:"login",
        hidden:true
     },{
        path:"/404",
        component:()=>import("@/pages/error-page/404"),
        hidden:true
     }
];
//异步的路由
const asyncrouter={

};

export default  new Router({
    routes
});


