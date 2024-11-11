<template>
  <main class="">
    <strong class="flex justify-center text-3xl items-center py-3">
      Diaristas disponíveis
    </strong>
    <ul class="flex flex-wrap justify-center items-center">
      <li
        v-for="user in users"
        :key="user.id"
        class="flex flex-col border-2 rounded-xl border-black p-6 m-3 justify-center items-center"
      >
        <img :src="user.perfil" alt="Foto de perfil" width="150" />
        {{ user.nome }} <br />
        {{ user.email }} <br />
        {{ user.contato }} <br />
        {{ user.endereco }} <br />
        {{ user.cidade }}
        <br />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import fetchUsers from '@/infra/services/fetchUsers'
import { defineComponent } from 'vue'

// Define a interface do tipo de usuário
interface User {
  id: number
  nome: string
  contato: string
  email: string
  endereco: string
  cidade: string
  perfil: string // URL da imagem de perfil
}

export default defineComponent({
  data() {
    return {
      users: [] as User[], // Define o tipo do array de usuários
    }
  },
  async mounted() {
    // Chame a função de serviço e atribua o resultado a 'users'
    const response = await fetchUsers()
    // Extrai os dados e ajusta a URL da imagem de perfil
    this.users = response.map(user => ({
      id: user.id,
      nome: user.nome,
      contato: user.contato,
      email: user.email,
      endereco: user.endereco,
      cidade: user.cidade,
      perfil: `http://localhost:1337${user.perfil[0]?.formats.thumbnail.url}`, // Ajuste a URL do perfil
    }))
  },
})
</script>
