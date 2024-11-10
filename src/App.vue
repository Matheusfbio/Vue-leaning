<script setup lang="ts">
import './assets/index.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex space-x-6 bg-blue-300 py-2 justify-start items-center">
    <img alt="logo" src="../src//assets/diarista-online.png" width="40" />
    <div class="ml-2 text-2xl">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="ml-2 text-2xl">
      <RouterLink to="/forms">Forms</RouterLink>
    </div>
  </header>
  <RouterView />
</template>
