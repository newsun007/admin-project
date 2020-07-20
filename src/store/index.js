import Vue from 'vue';
import Vuex from 'vuex';

import {login} from '@/api/login';

Vue.use(Vuex);


const modulesa= {
   

    state:{
        counter:0,
        number:8888,
        todos: [
            { id: 1, text: 'id1', done: true },
            { id: 2, text: 'id2', done: false }
          ]
    },
    mutations:{
        increater(state){
           
            return  state.counter++;
        },
        less(state){
            return --state.counter;
        }
    },
    getters:{
        dothis(state){
            return state.counter+"通过getter进行数据处理的"
        },
        anthoer: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
          }
    },
    actions:{
        increment ({ commit, state },n) {
            
            return new Promise((resolve,reject)=>{
                login(n.name,n.password).then(res=>{
                    console.log(res)
                    commit('increater',res.userInfo);
                    resolve()
                }).catch(error=>{
                    console.log(error);
                    reject();
                })
            })
            
          }
    }
}



  const store=new Vuex.Store({
    
    modules:{
        a:modulesa
    }

    });
export default store