<script setup>
import TheWelcome from '../components/TheWelcome.vue'



import { ref } from 'vue'
import AssignBox from '@/components/AssignBox.vue'
const status = ref(["Failed", "Failed", "Failed"])

function setStatus(text, index) {
  status.value[index] = text
}
const quest = ref()
const studnick = ref()
const studname = ref()


let tasks = [{nickname:"TANUZZO",name:"Gaetano",assignment:"Make A Website About SQL Injection",img:"../assets/foto.jpeg"},
{nickname:"SCORDIAGIRL",name:"Sofia",assignment:"Write A Presentation About SQL Injection",img:"../assets/foto1.jpeg"}, 
{nickname:"MESSI",name:"Elia",assignment:"Talk About SQL Injection",img:"../assets/foto2.jpeg"},]
if(JSON.parse(localStorage.getItem('task')).length == 0){
  localStorage.setItem('task', JSON.stringify(tasks))
}

const quests = ref(JSON.parse(localStorage.getItem('task')))
function addAssignment(){
  localStorage.setItem('task', JSON.stringify([...JSON.parse(localStorage.getItem('task')),{
    name: studname.value,
    nickname: studnick.value,
    assignment: quest.value
  }]))
  quests.value = JSON.parse(localStorage.getItem('task'))
  console.log(localStorage.getItem('task'))
}
</script>

<template>
  <div style="position: relative;top: 170px; flex-direction: column;" class="flex">
    <TheWelcome />
    <div class="flex column">

      
      
      <AssignBox  v-for="assignment in quests" :name="assignment.name" :nickname="assignment.nickname" :assignment="assignment.assignment" :img="assignment.img"/>
    </div>
    <div class="box flex" style="margin: 14px;height: 390px;width: 500px;">
      <h1> Add an Assignment</h1>
      <div class="flex">
        <p>Student Name:</p>
        <input type="text" v-model="studname" class="ta">
      </div>
      <div class="flex">
        <p>Also known as:</p>
        <input type="text" v-model="studnick" class="ta">
      </div>
      <div class="flex">
            <p>Assignment:</p>
          <input type="text" v-model="quest" class="ta">
        </div>
        <button class="approved" @click="addAssignment()" style="width: 50px;height: 50px;"> + </button>
    </div>

  </div>
</template>

<style>
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
.column{
  flex-wrap: wrap;
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
  margin-top: 8px;
  padding: 36px;

}
</style>
