<script setup lang="ts">
import loginSVG from "../../public/img/login.svg";
import { userStore } from "../store/user";

console.log(userStore.isLoggedIn());

const logout = () => {
  userStore.logout();
};

</script>

<template>
<div class="navbar bg-base-100">
  <div class="flex-1 space-x-12">
    <router-link class="btn btn-ghost text-xl" to="/">Accueil</router-link>
    <router-link class="btn btn-ghost text-xl" to="/recipes">Recettes</router-link>
    <router-link class="btn btn-ghost text-xl" to="/ingredients">Ingredients</router-link>
    <router-link class="btn btn-ghost text-xl" to="/game">Jouer</router-link>
  </div>
  <div class="flex-none">
    <button v-if="userStore.isLoggedIn()" @click="logout" class="btn btn-square btn-ghost">
      logout
    </button>
    <router-link  v-else to="/login">
      <button class="btn btn-square btn-ghost">
        <loginSVG />
      </button>
    </router-link> 
  </div>
</div>
</template>
