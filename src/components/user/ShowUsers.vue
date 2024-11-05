<template>
  <div>
    <h1>Lista de Usuários</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        )
        this.users = response.data
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error)
      }
    },
  },
}
</script>
