<template>
    <div id="layout">
       
        <input type="text" ref="myinout">
        <h1> 获取vuex里state的counter值==={{this.$store.state.a.counter}}=========</h1>
        <!-- <h2>{{dothis}}</h2> -->
        <!-- <h3>{{anthoer(1)}}</h3> -->
         <el-button @click="increat" type="primary">增加</el-button>
        <el-button @click="lesscounter" type="success">减少</el-button>

 <el-button  type="success">action</el-button>

        <router-link :to="{ name: 'login', params: { id: 1111,use:888}}">登录</router-link>


        <el-button type="primary">编程式导航传参</el-button>

          <el-alert title="成功提示的文案" type="success"></el-alert>


       
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default{
    data(){
        return {
            loginsd:888888
        }
    },
    created(){},
    mounted(){

        this.$nextTick(()=>{
            this.$refs.myinout.focus();
        })

        
    },
   computed:{
    
   
   },
    methods:{
     ...mapMutations( ['increater']),
    increat(){
        var n={name:"admin",password:123456}
       this['increater']()
    },
    lesscounter(){}
    }
}
</script>
<style>
h1,h2{
    text-align:center;
}
</style>




        