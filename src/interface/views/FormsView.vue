<script setup lang="ts">
import Button from '../components/ui/button/Button.vue'
import { Input } from '../components/ui/input'
</script>
<template>
  <main class="flex-1 flex-col p-2">
    <nav>
      <div class="relative w-full max-w-sm items-center space-y-4">
        <Input id="search" type="text" placeholder="Nome..." class="pl-10" />
        <div class="justify-center">
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </div>
        <Input id="search" type="text" placeholder="produto..." class="pl-10" />
        <div
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </div>
        <Input
          id="search"
          type="text"
          placeholder="numero da mesa..."
          class="pl-10"
        />
        <div
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </div>
        <Button>Cadastrar</Button>
      </div>
    </nav>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
