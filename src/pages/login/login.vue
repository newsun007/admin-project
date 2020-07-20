<template>
    <div id="login">
         <el-alert show-icon class="myset" title="VUE技术交流组基于vue-element-admin进行修改,欢迎大家使用，更多介绍请点击下方技术支持" type="success"></el-alert>
         <h1  @click="logins"> 获取vuex里state的counter值==={{this.$store.state.counter}}</h1>

    

    </div>
</template>
<script>
 import {login} from '@/api/login';
// import {setToken} from '@/utils/cookie';
export default{
    data(){
        return {
            path:"/",
            
        }
    },
    mounted(){
         console.log(this.$route)
    },
    methods:{
        logins(){
            login("admin","12346").then(res=>{
                console.log(res)
            }).catch(error=>{
                  console.log(error)
            })
        }
    },
    computed:{
    
    }
}
</script>
<style scoped>
#login{
    width: 100%;
    height: 100%;
    background: url("../../assets/login_images/background.jpg") no-repeat;
     background-size:cover;
      min-height: 100%;
}
#login>.myset{
    background: #e7faf0;
}
    
</style>
                 
