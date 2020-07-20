
const defaultSettings = require('./src/settings.js');//默认设置
const name=defaultSettings.title;

//根据项目环境配置根目录
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/adminstore': '/',
    outputDir:'dist',
    assetsDir:'assets',
    devServer: {
        port: "8888",//设置端口号  这里实际是设置本地服务器也就是  vuecli-serve的服务器
        open: true,//自动打开浏览器
        overlay: {
          warnings: false,
          errors: true
        },
       /* proxy: {//这个可以设置代理，  用于解决跨域问题
            '/api': {    // search为转发路径
                target: 'http://282u875y39.zicp.vip',  // 目标地址
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }, */
      },
      configureWebpack: {
        name: name
      }
  };