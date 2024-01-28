
<script setup lang="ts">
import { ref } from 'vue';
import { addUser } from '../api/user';
import { userStore } from '../store/user';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

let email = ref('');
let username = ref('');
let password = ref('');
let confirmPassword = ref('');

const errorP = ref<HTMLInputElement | null>(null);
const router = useRouter();

if (userStore.isLoggedIn()) {
    router.push('/');
}

const navigateToLogin = () => {
    router.push('/login');
};

const handleErrorMessage = (m: string) => {
    if (errorP.value) {
        errorP.value.innerText = m;
    }
}

const submitForm = async () => {
    if (password.value !== confirmPassword.value) {
        handleErrorMessage("Les mots de passe ne correspondent pas")
        return;
    }

    const user = {
        email: email.value,
        username: username.value,
        plainPassword: password.value,
    };


    try {
        await addUser(user);
        useToast().success('Votre compte a été créé avec succès');
        router.push('/login');
    } catch (error: any) {
        if (error.type == 'ConstraintViolationList') {
            handleErrorMessage("L'email ou le nom d'utilisateur existe déjà");
        }
    }

};
</script>

<template>
    <section class="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] items-center">
    <div class="bg-[url('../../public/img/OIG.png')]  hidden lg:block w-full md:w-1/2 xl:w-1/2 min-h-[calc(100vh-4rem)]"></div>
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/2 min-h-[calc(100vh-4rem)] px-6 lg:px-16 xl:px-12 flex items-center justify-center">
      <div class="w-2/3 h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            S'inscrire
        </h1>
        <p class="text-red-500 mt-4" ref="errorP">
        </p>
        <form class="mt-6" @submit.prevent="submitForm">
            <div>
                <label class="block text-gray-700">Adresse e-mail</label>
                <input v-model="email" type="email" placeholder="Entrez votre adresse e-mail"  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none" required />
            </div>

            <div class="mt-4">
                <label class="block text-gray-700">Nom d'utilisateur</label>
                <input v-model="username" type="text" placeholder="Entrez un nom d'utilisateur"  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none" minlength="6" required />
            </div>

            <div class="mt-4">
                <label class="block text-gray-700">Mot de passe</label>
                <input v-model="password" type="password" placeholder="Entrez votre mot de passe"  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none" minlength="6" required />
            </div>

            <div class="mt-4">
                <label class="block text-gray-700">Confirmer le mot de passe</label>
                <input v-model="confirmPassword" type="password" placeholder="Entrez à nouveau votre mot de passe"  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none" minlength="6"
                    required />
            </div>

            <button type="submit"
                class="w-full block bg-primary hover:bg-primary focus:bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-6">
                S'inscrire
            </button>
        </form>
        <p class="mt-8">
          Déjà un compte?
          <a class="text-primary hover:text-primary font-semibold  cursor-pointer" @click="navigateToLogin" >Se connecter</a>
        </p>
      </div>
    </div>
  </section>
    
</template>