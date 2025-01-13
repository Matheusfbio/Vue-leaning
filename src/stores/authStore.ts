import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // Dados do usuário autenticado
    token: null, // Token JWT ou outro token de autenticação
  }),

  getters: {
    isAuthenticated: state => !!state.token,
  },

  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        // Simulação de chamada de API para login
        const response = await fakeApiLogin(credentials)

        // Salvar o token e os dados do usuário
        this.user = response.user
        this.token = response.token

        // Salvar o token no localStorage (opcional)
        localStorage.setItem('token', response.token)
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        throw error
      }
    },

    logout() {
      this.user = null
      this.token = null

      // Remover o token do localStorage (opcional)
      localStorage.removeItem('token')
    },

    loadTokenFromStorage() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
        // Opcional: carregar dados do usuário a partir do token
      }
    },
  },
})

// Simulação de API (substituir por uma real)
async function fakeApiLogin(credentials: {
  username: string
  password: string
}) {
  if (credentials.username === 'user' && credentials.password === 'password') {
    return {
      user: { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      token: 'fake-jwt-token',
    }
  } else {
    throw new Error('Credenciais inválidas')
  }
}
