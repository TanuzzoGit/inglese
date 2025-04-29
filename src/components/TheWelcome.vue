<template>

<h1> Welcome, Justin</h1>
<p> You have {{ n }} Assignments to Approve:</p>
</template>
<script setup>

let n = JSON.parse(localStorage.getItem('task')).length
</script>