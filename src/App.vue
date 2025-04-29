<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/nav.vue';

</script>

<template>
  <Nav style="z-index: 999;" />
  <RouterView />
</template>

<style>
.flex{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;align-self: center;
}
</style>
