
<script setup lang="ts">
import { ref } from 'vue';
import { addUser } from '../api/user';

let email = ref('');
let username = ref('');
let password = ref('');
let confirmPassword = ref('');

const submitForm = async () => {
    if (password.value !== confirmPassword.value) {
        return;
    }

    const user = {
        email: email.value,
        username: username.value,
        password: password.value,
    };

    try {
        await addUser(user);
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
        S'inscrire
    </h1>
    <form class="mt-6" @submit.prevent="submitForm">
        <div>
            <label class="block text-gray-700">Adresse e-mail</label>
            <input v-model="email" type="email" placeholder="Entrez votre adresse e-mail" required />
        </div>

        <div class="mt-4">
            <label class="block text-gray-700">Nom d'utilisateur</label>
            <input v-model="username" type="text" placeholder="Entrez un nom d'utilisateur" minlength="6" required />
        </div>

        <div class="mt-4">
            <label class="block text-gray-700">Mot de passe</label>
            <input v-model="password" type="password" placeholder="Entrez votre mot de passe" minlength="6" required />
        </div>

        <div class="mt-4">
            <label class="block text-gray-700">Confirmer le mot de passe</label>
            <input v-model="confirmPassword" type="password" placeholder="Entrez à nouveau votre mot de passe" minlength="6"
                required />
        </div>

        <button type="submit"
            class="w-full block bg-primary hover:bg-primary focus:bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-6">
            S'inscrire
        </button>
    </form>
</template>