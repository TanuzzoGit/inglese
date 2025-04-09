<template>
    <div class="flex" style="position: fixed; justify-content: space-between;width: 100%;height: 85px;background-color: white;border-bottom: 2px solid violet; filter: drop-shadow( 0px 2px 2px #a4a4a4);">
        <img src="../assets/logounict.png" style="width: 180px;height: 80px; margin-left: 14px;">
        
        <div>
        <p style="font-size: 12px;">Totally True University Administration Software</p>
        </div>
        <div>
            <p class="navinput">Registra Voto</p>
        </div>
        
        <div  @click="logout()">
        <SvgIcon type="mdi" :path="path" style="margin-right: 14px;"  ></SvgIcon>
    </div>
    </div>
</template>
<script setup>

import { store } from '@/main';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLogout  } from '@mdi/js'
let path = mdiLogout

function logout(){
    console.log("button")
    store.commit('log')
}
</script>