<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

const hasAccount = ref(true);

const toggleForm = () => {
  hasAccount.value = !hasAccount.value;
};


</script>

<template>
  <section class="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] items-center">
    <div class="bg-[url('../../public/img/OIG.png')]  hidden lg:block w-full md:w-1/2 xl:w-1/2 min-h-[calc(100vh-4rem)]">

    </div>
      
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/2 min-h-[calc(100vh-4rem)] px-6 lg:px-16 xl:px-12 flex items-center justify-center">
      
      <div class="w-2/3 h-100" v-if="hasAccount">
        <LoginForm />
        <p class="mt-8">
          Besoin d'un compte?
          <a class="text-primary hover:text-primary font-semibold  cursor-pointer" @click="toggleForm" >S'inscrire</a>
        </p>
      </div>

      <div class="w-2/3 h-100" v-else >
        <SignupForm />
        <p class="mt-8">
          Déjà un compte?
          <a class="text-primary hover:text-primary font-semibold  cursor-pointer" @click="toggleForm" >Se connecter</a>
        </p>
      </div>

    </div>
  </section>
</template>
