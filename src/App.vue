<script setup lang="ts">
import './assets/index.css'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <div
      class="flex justify-between text-center items-center bg-blue-500 mr-[1150px]"
    >
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
      <nav>
        <RouterLink to="/forms">Forms</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
