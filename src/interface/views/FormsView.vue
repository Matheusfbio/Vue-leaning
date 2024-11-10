<script setup lang="ts">
import { ref } from 'vue'
import Button from '../components/ui/button/Button.vue'
import { Input } from '../components/ui/input'

const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const city = ref('')
</script>
<template>
  <main class="flex-1 flex-col p-2">
    <nav>
      <div class="relative w-full max-w-sm items-center space-y-4">
        <Input
          id="search"
          type="text"
          placeholder="Nome completo"
          class="pl-10"
          v-model="name"
        />
        <p>Name: {{ name }}</p>
        <Input
          id="search"
          type="text"
          placeholder="email"
          class="pl-10"
          v-model="email"
        />
        <p>Email: {{ email }}</p>
        <Input
          id="search"
          type="text"
          placeholder="telefone"
          class="pl-10"
          v-model="phone"
        />
        <p>Phone: {{ phone }}</p>
        <Input
          id="search"
          type="text"
          placeholder="endereço"
          class="pl-10"
          v-model="address"
        />
        <p>Endereço: {{ address }}</p>
        <Input
          id="search"
          type="text"
          placeholder="cidade"
          class="pl-10"
          v-model="city"
        />
        <p>Cidade: {{ city }}</p>
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
