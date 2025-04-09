<template>
  <div class="flex" style="margin: 0; padding: 0;min-height: 900px;">
    
    <div class="flex login" >
      <h1 style="margin:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Welcome, please login.</h1>
      <input class="textfield" v-model="email" placeholder="Email">
      <input class="textfield" v-model="password" placeholder="Password">
      <button @click="login()" class="btn">
      Log in!
    </button>
    </div>
   
  
  
  </div>
</template>

<script setup>
import { store } from '@/main';
import router from '@/router';
import { ref } from 'vue';
const email = ref()
const password = ref()

let paylod = " ' OR' "

function login(){
  email.value == store.getters.getcred.mail ? password.value == store.getters.getcred.psw ? store.commit('log') : console.log("cred errate") : console.log("cred errate")
  console.log(email.value)
  if (
  email.value.includes("OR") || email.value.includes("''") ||
  email.value.includes(",") || email.value.includes("|") || email.value.includes("/") ||
  password.value.includes("OR") || password.value.includes("''") ||
  password.value.includes(",") || password.value.includes("|") || password.value.includes("/") ||
  email.value.includes("'") || password.value.includes("''")
) {
  store.commit('log')
}
  console.log(store.getters.getAuth)
  router.push("/")
}
</script>
<style scoped>
.login{
  flex-direction: column; background-color: #f3f3f3;width: 500px;height: 320px;
  border-radius: 35px;
  border: 3px solid violet;
  filter: drop-shadow(-19px 15px 24px #b1b1b1);
}

</style>
