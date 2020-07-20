import request from '@/utils/request';
export const  login =(username,password)=>request({
    url: 'data/login',
    method: 'post',
    data:{
        username,
        password
    }
  })
  //https://www.fastmock.site/mock/c3a87b8915a0251e35c83d666b98f7a9/data/login