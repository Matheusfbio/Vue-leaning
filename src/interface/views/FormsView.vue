<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="nome">Nome</label>
        <input
          v-model="formData.nome"
          id="nome"
          type="text"
          placeholder="Digite seu nome"
        />
      </div>

      <div>
        <label for="contato">Contato</label>
        <input
          v-model="formData.contato"
          id="contato"
          type="text"
          placeholder="Digite seu contato"
        />
      </div>

      <div>
        <label for="endereco">Endereço</label>
        <input
          v-model="formData.endereco"
          id="endereco"
          type="text"
          placeholder="Digite seu endereço"
        />
      </div>

      <div>
        <label for="email">Email</label>
        <input
          v-model="formData.email"
          id="email"
          type="email"
          placeholder="Digite seu email"
        />
      </div>

      <div>
        <label for="cidade">Cidade</label>
        <input
          v-model="formData.cidade"
          id="cidade"
          type="text"
          placeholder="Digite sua cidade"
        />
      </div>

      <div>
        <label for="foto">Foto do Perfil</label>
        <input
          id="foto"
          type="file"
          @change="handleFileChange"
          accept="image/*"
        />
      </div>

      <div v-if="previewImage">
        <p>Pré-visualização da imagem:</p>
        <img :src="previewImage" alt="Pré-visualização" class="preview-img" />
      </div>

      <div v-if="isLoading">
        <p>Enviando...</p>
      </div>

      <div v-if="errorMessage" class="error">
        <p>{{ errorMessage }}</p>
      </div>

      <div v-if="successMessage" class="success">
        <p>{{ successMessage }}</p>
      </div>

      <button type="submit" :disabled="isLoading">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
import postDiarist from '@/infra/services/postDiarist'
import { ref } from 'vue'

export default {
  setup() {
    const formData = ref({
      nome: '',
      contato: '',
      endereco: '',
      email: '',
      cidade: '',
    })

    const selectedFile = ref<File | null>(null)
    const previewImage = ref<string | null>(null)

    const isLoading = ref(false)
    const successMessage = ref('')
    const errorMessage = ref('')

    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      if (target.files && target.files[0]) {
        selectedFile.value = target.files[0]
        const reader = new FileReader()

        reader.onload = () => {
          previewImage.value = reader.result as string
        }

        reader.readAsDataURL(selectedFile.value)
        console.log('Arquivo selecionado:', selectedFile.value) // Debug
      }
    }

    const isFormValid = () => {
      return (
        formData.value.nome &&
        formData.value.contato &&
        formData.value.endereco &&
        formData.value.email &&
        formData.value.cidade &&
        selectedFile.value
      )
    }

    const handleSubmit = async () => {
      try {
        errorMessage.value = ''
        successMessage.value = ''
        isLoading.value = true

        // Validar campos
        if (!isFormValid()) {
          errorMessage.value =
            'Por favor, preencha todos os campos corretamente.'
          return
        }

        if (!selectedFile.value) {
          errorMessage.value = 'Por favor, adicione uma foto de perfil.'
          return
        }

        // **Chamar a função postDiarist para fazer o upload do arquivo e salvar os dados**
        const diaristResponse = await postDiarist(
          formData.value,
          selectedFile.value,
        )

        if (diaristResponse) {
          successMessage.value = 'Diarista cadastrado com sucesso!'
          formData.value = {
            nome: '',
            contato: '',
            endereco: '',
            email: '',
            cidade: '',
          }
          selectedFile.value = null
          previewImage.value = null
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error)
        errorMessage.value =
          'Erro ao cadastrar o diarista. Por favor, tente novamente.'
      } finally {
        isLoading.value = false
      }
    }

    return {
      formData,
      selectedFile,
      previewImage,
      isLoading,
      successMessage,
      errorMessage,
      handleFileChange,
      handleSubmit,
    }
  },
}
</script>

<style scoped>
.form-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

button:disabled {
  background-color: #ccc;
}

.success {
  color: green;
}

.error {
  color: red;
}

.preview-img {
  max-width: 200px;
  max-height: 200px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
