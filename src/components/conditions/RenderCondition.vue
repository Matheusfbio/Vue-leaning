// In this code, i'm to use the v-conditional expression to validate the average
rating
<script setup lang="ts">
import ShowDataUsers from '../user/ShowDataUsers.vue'
const show = true
const media = 6
</script>
<style>
.showColor {
  color: red;
}
.okColor {
  color: green;
}
.warmingColor {
  color: yellow;
}
.worseColor {
  color: red;
}
</style>

<template>
  <div v-if="show" class="showColor">
    <ShowDataUsers />
    <h1 v-if="media >= 7" class="okColor">perfeito</h1>
    <h1 v-else-if="media >= 5" class="warmingColor">precisa melhorar</h1>
    <h1 v-else class="worseColor">ruim</h1>
  </div>
</template>
