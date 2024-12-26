import type { Diarist } from '@/core/entities/diarist'
import type { DiaristRepository } from '@/core/use-cases/DiaristManager'
import axios from 'axios'

export const HttpDiaristRepository = (): DiaristRepository => {
  const BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL

  return {
    create: async (diarist: Diarist): Promise<void> => {
      await axios.post(`${BASE_URL}/api/diaristas?populate=perfil`, diarist, {
        headers: { 'Content-Type': 'application/json' },
      })
    },
  }
}
