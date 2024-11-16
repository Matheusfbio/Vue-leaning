<script lang="ts">
import fetchDiarist from '@/infra/services/fetchDiarist'
import { defineComponent, onMounted, ref } from 'vue'

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
  setup() {
    // Cria uma referência reativa para armazenar os usuários
    const users = ref<User[]>([])

    // Função para buscar e configurar os dados dos usuários
    const loadUsers = async () => {
      const response = await fetchDiarist()
      users.value = response.map(user => ({
        id: user.id,
        nome: user.nome,
        contato: user.contato,
        email: user.email,
        endereco: user.endereco,
        cidade: user.cidade,
        perfil: user.perfil[0]?.formats.thumbnail.url
          ? `http://localhost:1337${user.perfil[0]?.formats.thumbnail.url}`
          : '', // A URL da imagem de perfil
      }))
    }

    // Chama a função ao montar o componente
    onMounted(loadUsers)

    // Retorna as variáveis para serem usadas no template
    return {
      users,
    }
  },
})
</script>

<template>
  <main>
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
