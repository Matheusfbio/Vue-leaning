import axios from 'axios'

export interface DiaristProfile {
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

export interface DiaristData {
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
  perfil: DiaristProfile[]
}

export default async function fetchUsers(): Promise<DiaristData[]> {
  try {
    const response = await axios.get('http://localhost:1337/api/diaristas', {
      params: { populate: 'perfil' }, // Certifique-se de incluir `populate` se o campo for uma relação no Strapi
    })
    console.log(response.data) // Verifique os dados

    return response.data.data // Retorna apenas o array de dados
  } catch (error) {
    console.error('Erro ao buscar os usuários:', error)
    return [] // Retorna um array vazio em caso de erro
  }
}