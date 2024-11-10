// services/fetchUsers.ts
import axios from 'axios'

// export default async function fetchUsers() {
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users',
//     )
//     return response.data // Retorne os dados
//   } catch (error) {
//     console.error('Erro ao buscar os usuários:', error)
//     return [] // Retorne um array vazio em caso de erro
//   }
// }

export default async function fetchStrapiCms() {
  try {
    const response = await axios.get('http://localhost:1337/api/diaristas')
    return response.data // Retorne os dados
  } catch (error) {
    console.error('Erro ao buscar os usuários:', error)
    return [] // Retorne um array vazio em caso de erro
  }
}
