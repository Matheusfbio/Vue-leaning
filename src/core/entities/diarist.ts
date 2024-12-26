export type Diarist = {
  id: number
  nome: string
  contato: string
  email: string
  endereco: string
  cidade: string
  perfil: string
}

export const createDiarist = (
  id: number,
  nome: string,
  contato: string,
  email: string,
  endereco: string,
  cidade: string,
  perfil: string,
): Diarist => ({
  id,
  nome,
  contato,
  email,
  endereco,
  cidade,
  perfil,
})
