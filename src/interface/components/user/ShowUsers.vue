<template>
  <main class="bg-green-400">
    <strong class="flex justify-center text-3xl items-center py-3"
      >Lista de Diaristas</strong
    >
    <ul class="flex flex-wrap justify-center items-center">
      <li
        v-for="user in users"
        :key="user.id"
        class="flex flex-col border-2 bg-orange-400 border-black p-6 m-3 justify-center items-center"
      >
        <img src="/src/assets/img/MatheuseLucy.png" width="150" />
        <strong>Nome</strong> {{ user.name }} <br />
        <strong>Email</strong> {{ user.email }} <br />
        <strong>Telefone</strong> {{ user.phone }} <br />
        <strong>Endereço</strong> {{ user.address.street }} <br />
        <strong>Cidade</strong> {{ user.address.city }}
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import fetchUsers from "@/infra/services/fetchUsers";

import { defineComponent } from "vue";

interface Address {
  street: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

export default defineComponent({
  data() {
    return {
      users: [] as User[], // Define o tipo do array de usuários
    };
  },
  async mounted() {
    // Chame a função e atribua o resultado a 'users'
    this.users = await fetchUsers();
  },
});
</script>
