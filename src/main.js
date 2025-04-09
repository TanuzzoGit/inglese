import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state:{auth:false,mail:'justin@unict.com',psw:'iamjustin'},
  mutations: {  
    log(state) {
      state.auth= true
    },
    logout(state) {
      state.auth= false
    }
  },
  getters:{
    getAuth(state){
        return state.auth;
    },
    getcred(state){
      return {mail:state.mail,psw:state.psw}
    }
  }
})
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
