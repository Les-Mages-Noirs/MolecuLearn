<script setup lang="ts"></script>

<template>
    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
        S'inscrire
    </h1>

    <form class="mt-6" action="#" method="POST">
        <div>
            <label class="block text-gray-700">Adresse e-mail</label>
            <input type="email" name="" id="" placeholder="Entrez votre adresse e-mail"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                autofocus required />
        </div>

        <div class="mt-4">
            <label class="block text-gray-700">Nom d'utilisateur</label>
            <input type="text" name="" id="" placeholder="Entrez un nom d'utilisateur" minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                required />
        </div>

        <div class="mt-4">
            <label class="block text-gray-700">Mot de passe</label>
            <input type="password" name="" id="" placeholder="Entrez votre mot de passe" minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                required />
        </div>

        <div class="mt-4">
            <label class="block text-gray-700">Confirmer le mot de passe</label>
            <input type="password" name="" id="" placeholder="Entrez à nouveau votre mot de passe" minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary focus:bg-white focus:outline-none"
                required />
        </div>


        <button type="submit"
            class="w-full block bg-primary hover:bg-primary focus:bg-primary text-white font-semibold rounded-lg px-4 py-3 mt-6">
            S'inscrire
        </button>
    </form>
</template>
