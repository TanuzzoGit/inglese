<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
const status = ref(["Bocciato","Bocciata","Bocciato"])

function setStatus(text,index){
  status.value[index] = text
}
</script>

<template>
  <div style="position: relative;top: 170px; flex-direction: column;" class="flex">
    <TheWelcome />
    <div class="flex">

      <div class="box flex ">
        <p style="font-weight: 500;"> {{ status[0] }}</p>
        <div class="flex" style="flex-direction: column;">
        <img class="pfp" src="../assets/foto.jpeg" alt="">
        <p style="z-index: 999;font-weight: 800; margin-top: 8px;"> TANUZZO </p>
      </div>
      <button @click="setStatus('Passato!',0)" class="approved"> Approva </button>
      <button @click="setStatus('Bocciato',0)" class="bocciato"> Boccia </button>


         
      </div>
      <div class="box flex ">
        <p style="font-weight: 500;"> {{ status[1] }}</p>

        <div class="flex" style="flex-direction: column;">
          <img class="pfp" src="../assets/foto1.jpeg" alt="">
          <p style="z-index: 999;font-weight: 800; margin-top: 8px;"> SCORDIAGIRL </p>

        </div>
        <button @click="setStatus('Passato!',1)" class="approved"> Approva </button>
      <button @click="setStatus('Bocciato',1)" class="bocciato"> Boccia </button>


      </div>
      <div class="box flex ">
        <p style="font-weight: 500;"> {{ status[2] }}</p>

        <div class="flex" style="flex-direction: column;">
          <img class="pfp" src="../assets/foto2.jpeg" alt="">
          <p style="z-index: 999;font-weight: 800; margin-top: 8px;"> MESSI </p>

        </div>
        <button @click="setStatus('Passato!',2)" class="approved"> Approva </button>
        <button @click="setStatus('Bocciato',2)" class="bocciato"> Boccia </button>

        

      </div>
    </div>
    <img v-if="status[0] == 'Bocciato' || status[1] == 'Bocciato' || status[2] == 'Bocciato' " src="../assets/sad1.png" alt="">
  </div>
</template>

<style>
.approved{
  width: 120px;
  height: 40px;
  border: 2px solid rgb(47, 145, 47);
  background-color: white;
  border-radius: 5px;

}
.approved:focus{
  border: 2px solid rgb(47, 145, 47);

}

.approved:hover{
background-color: rgb(206, 235, 206);
transition: background-color 120ms linear;
}
.bocciato{
  width: 120px;
  height: 40px;
  border: 2px solid rgb(199, 24, 24);
  background-color: white;
  border-radius: 5px;

}
.bocciato:focus{
  border: 2px solid rgb(199, 24, 24);

}
.bocciato:hover{
background-color: rgb(253, 146, 146);
transition: background-color 120ms linear;
}

.pfp{
  width: 120px !important;
  height: 120px !important;
  border: 2px solid violet;
  border-radius: 10px;
  filter: drop-shadow(-19px 15px 24px #bdbdbd);


}
.box {
  width: 350px;
  height: 350px;
  flex-direction: column;
  background-color: #f3f3f3;
  justify-content: space-between;
  border-radius: 35px;
  border: 3px solid violet;
  filter: drop-shadow(-19px 15px 24px #b1b1b1);
  margin-left: 24px;
  margin-right: 24px;
  padding: 36px;

}
</style>
