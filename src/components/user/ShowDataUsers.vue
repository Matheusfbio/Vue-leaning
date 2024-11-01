<script setup lang="ts">
import Button from '../ui/button/Button.vue'

const users = ['Matheus', 'João', 'Natan', 'Lucyellici']
</script>

<template>
  <main>
    <ul>
      <h1 v-for="user in users" :key="user">Cliente: {{ user }}</h1>
    </ul>
    <div>
      <Button variant="secondary">Forms</Button>
    </div>
  </main>
</template>
