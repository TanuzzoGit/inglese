<template>

<div class="box flex ">
  <p style="font-weight: 500;"> {{ status }}</p>

  <div class="flex" style="flex-direction: column;">
  <img class="pfp" :src="getUrl()" alt="">
  <p style="z-index: 888;font-weight: 800; margin-top: 8px;"> {{ props.Nickname }} </p>
  <p style="z-index: 888;font-weight: 600; margin-top: 8px;"> {{ props.name }} </p>
  <p style="z-index: 888;font-weight: 400; margin-top: 8px;"> {{  props.Assignment }} </p>

</div>
<button @click="setStatus('Passed!')" class="approved"> Approve </button>
<button @click="setStatus('Failed')" class="bocciato"> Do not approve </button>
<button @click="remove()" class="bocciato"> Remove </button>


   
</div>
</template>

<script setup>
import { ref } from 'vue'
function remove() {
  const tasks = JSON.parse(localStorage.getItem('task')) || [];

  const index = tasks.findIndex(item => item.nickname === props.nickname);

  if (index !== -1) {
    tasks.splice(index, 1); // rimuove l'elemento
    localStorage.setItem('task', JSON.stringify(tasks)); // salva aggiornato
    console.log(`Elemento con nickname "${props.nickname}" rimosso.`);
    window.location.reload()
  } else {
    console.log(`Nessun elemento trovato con nickname "${props.nickname}".`);
  }
}

function getUrl() {
  return new URL(props.img, import.meta.url).href
}



const props = defineProps({
    name: String,
    nickname: String,
    assignment: String,
    img: String
})
const status = ref("Bocciato")
console.log(props.img)


function setStatus(text){
  status.value= text
}
</script>
<style>

.flex{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;align-self: center;
}

p{
  text-align: center;
}
.ta {
  margin: 4px;
  border-radius: 10px;
  border: none;
  background-color: #e7e6e6;
  height: 45px;
  width: 75%;
  padding: 19px;
  text-decoration: underline;
}

.ta:focus {
  border: none;
  outline: none;
}

.approved {
  width: 130px;
  height: 38px;
  margin-bottom: 4px;
  border: 2px solid rgb(47, 145, 47);
  background-color: white;
  border-radius: 5px;

}

.approved:focus {
  border: 2px solid rgb(47, 145, 47);

}

.approved:hover {
  background-color: rgb(206, 235, 206);
  transition: background-color 120ms linear;
}

.bocciato {
  width: 130px;
  height: 38px;
  border: 2px solid rgb(199, 24, 24);
  background-color: white;
  border-radius: 5px;

}

.bocciato:focus {
  border: 2px solid rgb(199, 24, 24);

}

.bocciato:hover {
  background-color: rgb(253, 146, 146);
  transition: background-color 120ms linear;
}

.pfp {
  width: 120px !important;
  height: 120px !important;
  border: 2px solid violet;
  border-radius: 10px;
  filter: drop-shadow(-19px 15px 24px #bdbdbd);


}

.box {
  width: 390px;
  height: 390px;
  flex-direction: column;
  background-color: #f3f3f3;
  justify-content: space-between;
  border-radius: 35px;
  border: 3px solid violet;
  filter: drop-shadow(-19px 15px 24px #b1b1b1);
  margin-left: 24px;
  margin-right: 24px;
  padding: 36px;

}</style>