import axios from 'axios'
import type { DiaristData } from './fetchDiarist'

export default async function postDiarist(
  diaristData: { [key: string]: unknown },
  file: File,
): Promise<DiaristData> {
  const API_URL = process.env.API_URL || 'http://localhost:1337'

  try {
    // Passo 1: Fazer upload do arquivo
    const uploadData = new FormData()
    uploadData.append('files', file)

    const uploadResponse = await axios.post(
      `${API_URL}/api/upload/`,
      uploadData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    if (!uploadResponse.data || !uploadResponse.data[0]?.id) {
      throw new Error('Erro ao fazer upload da imagem.')
    }

    const uploadedFileId = uploadResponse.data[0].id

    // Adiciona o ID do arquivo ao campo perfil
    diaristData.perfil = [uploadedFileId]

    console.log('DiaristData antes do envio:', diaristData)

    // Passo 2: Enviar dados do diarista
    const response = await axios.post(
      `${API_URL}/api/diaristas?populate=perfil`,
      { data: diaristData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.data || !response.data.data) {
      throw new Error('Resposta inesperada do servidor.')
    }

    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro detalhado:', error.response?.data)
      throw new Error(
        error.response?.data?.error || 'Erro ao cadastrar o diarista',
      )
    }
    console.error('Erro ao cadastrar:', error)
    throw new Error('Erro ao cadastrar o diarista')
  }
}
