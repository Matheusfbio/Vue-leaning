import axios from 'axios'

export interface UserProfile {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    small: {
      url: string
      width: number
      height: number
    }
    thumbnail: {
      url: string
      width: number
      height: number
    }
  }
  url: string
}

export interface UserData {
  id: number
  documentId: string
  nome: string
  contato: string
  endereco: string
  email: string
  cidade: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  perfil: UserProfile[]
}

export default async function fetchUsers(): Promise<UserData[]> {
  try {
    const response = await axios.get(
      'http://localhost:1337/api/diaristas?populate=*',
    )
    return response.data.data // Retorna apenas o array de dados
  } catch (error) {
    console.error('Erro ao buscar os usuários:', error)
    return [] // Retorna um array vazio em caso de erro
  }
}
