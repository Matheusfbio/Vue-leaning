<script lang="ts">
import fetchDiarist from '@/diarist/services/fetchDiarist'
import axios from 'axios'
import perfilNull from '@/assets/img/perfil-null.png'
import { defineComponent, onMounted, ref } from 'vue'

// Define a interface do tipo de usuário
interface Diarist {
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
    const diarists = ref<Diarist[]>([])

    // Função para buscar e configurar os dados dos usuários
    const loadDiarists = async () => {
      try {
        // Buscar dados dos diaristas
        const diaristResponse = await fetchDiarist()
        const diaristsData = diaristResponse

        // Buscar dados das imagens
        const imageResponse = await axios.get(
          'http://localhost:1337/api/upload/files?populate=*',
        )
        const images = imageResponse.data

        // Associar imagens aos diaristas
        diarists.value = diaristsData.map(diarist => {
          // Busca a imagem correspondente ao perfil
          const matchedImage = images.find(
            image => image.id === diarist.perfil?.id,
          )

          // Determina a URL da imagem
          const perfilUrl = matchedImage
            ? `http://localhost:1337${matchedImage.url}` // URL da imagem encontrada
            : perfilNull // Imagem de fallback

          console.log(`Diarista: ${diarist.nome}, URL da imagem: ${perfilUrl}`)

          return {
            id: diarist.id,
            nome: diarist.nome,
            contato: diarist.contato,
            email: diarist.email,
            endereco: diarist.endereco,
            cidade: diarist.cidade,
            perfil: perfilUrl, // URL final da imagem
          }
        })
      } catch (error) {
        console.error('Erro ao carregar os diaristas ou imagens:', error)
      }
    }

    // Chama a função ao montar o componente
    onMounted(loadDiarists)

    // Retorna as variáveis para serem usadas no template
    return {
      diarists,
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
        v-for="diarist in diarists"
        :key="diarist.id"
        class="flex flex-col border-2 rounded-xl border-black p-6 m-3 justify-center items-center"
      >
        <img :src="diarist.perfil" width="150" alt="Imagem do perfil" />
        <!-- <p>URL da imagem: {{ diarist.perafil }}</p> -->
        <!-- Log visual -->
        <strong>{{ diarist.nome }}</strong>
        <p>{{ diarist.email }}</p>
        <p>{{ diarist.contato }}</p>
        <p>{{ diarist.endereco }}</p>
        <p>{{ diarist.cidade }}</p>
      </li>
    </ul>
  </main>
</template>
