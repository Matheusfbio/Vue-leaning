<script setup lang="ts">
import ShowDataUsers from '../user/ShowDataUsers.vue'
const show = true
</script>
<style>
.showColor {
  color: red;
}
</style>

<template>
  <div v-if="show" class="showColor">
    <h1>account</h1>
    <ShowDataUsers />
  </div>
</template>
