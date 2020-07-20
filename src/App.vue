<template>
  <div id="app">
     <router-view ></router-view>
  </div>
</template>

<script>

import '@/style/common.css'//初始化样式
export default {
  name: 'App',
  components: {
    
  },
  created(){
   
  }
}
</script>

<style>
  #app{
        width:100%;
        height: 100%;
    }
</style>
