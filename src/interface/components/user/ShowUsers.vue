<template>
  <div>
    <h1>Lista de Diaristas</h1>
    <ul>
      <li v-for="user in users" :key="user.id" class="py-2">
        <img src="/src/assets/img/MatheuseLucy.png" width="120" />
        <strong>Nome:</strong> {{ user.name }} <br />
        <strong>Email:</strong> {{ user.email }} <br />
        <strong>Telefone:</strong> {{ user.phone }} <br />
        <strong>Endereço:</strong> {{ user.address.street }} <br />
        <strong>Cidade:</strong> {{ user.address.city }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import fetchUsers from '@/infra/services/fetchUsers'

import { defineComponent } from 'vue'

interface Address {
  street: string
  city: string
}

interface User {
  id: number
  name: string
  email: string
  phone: string
  address: Address
}

export default defineComponent({
  data() {
    return {
      users: [] as User[], // Define o tipo do array de usuários
    }
  },
  async mounted() {
    // Chame a função e atribua o resultado a 'users'
    this.users = await fetchUsers()
  },
})
</script>
