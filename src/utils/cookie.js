import Cookies from 'js-cookie';

//对coookies 进行封装
const TokenKey='Admin-Token';
export function getToken(){
    return Cookies.get(TokenKey);
}
export function setToken(token){
    return Cookies.set(TokenKey,token);
}
export function removeToken(){
    return Cookies.remove(TokenKey);   
}







