<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="credentials.username" placeholder="Usuário" />
      <input
        v-model="credentials.password"
        type="password"
        placeholder="Senha"
      />
      <button type="submit">Entrar</button>
    </form>
    <p v-if="authStore.isAuthenticated">
      Usuário autenticado: {{ authStore.user?.name }}
    </p>
    <button v-if="authStore.isAuthenticated" @click="authStore.logout">
      Sair
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore' // Atualize o caminho conforme necessário

export default {
  setup() {
    const authStore = useAuthStore()

    const credentials = ref({
      username: '',
      password: '',
    })

    const handleLogin = async () => {
      try {
        await authStore.login(credentials.value)
        alert('Login bem-sucedido!')
      } catch (error) {
        alert('Erro ao fazer login!')
      }
    }

    return {
      authStore,
      credentials,
      handleLogin,
    }
  },
}
</script>
