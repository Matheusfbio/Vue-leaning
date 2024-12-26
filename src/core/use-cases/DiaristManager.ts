import { createDiarist, type Diarist } from '../entities/diarist'

export type DiaristRepository = {
  create(diarist: Diarist): Promise<void>
}

export const DiaristManager = (repository: DiaristRepository) => ({
  createDiarist: async (
    id: number,
    nome: string,
    contato: string,
    email: string,
    endereco: string,
    cidade: string,
    perfil: string,
  ): Promise<Diarist> => {
    const diarist = createDiarist(
      id,
      nome,
      contato,
      email,
      endereco,
      cidade,
      perfil,
    )
    await repository.create(diarist)
    return diarist
  },
})
