<script setup lang="ts">
import loginSVG from "../../public/img/login.svg";
</script>

<template>
<div class="navbar bg-base-100">
  <div class="flex-1 space-x-12">
    <router-link class="btn btn-ghost text-xl" to="/">Accueil</router-link>
    <router-link class="btn btn-ghost text-xl" to="/recipes">Recettes</router-link>
    <router-link class="btn btn-ghost text-xl" to="/game">Jouer</router-link>
  </div>
  <div class="flex-none">
    <router-link to="/login">
      <button class="btn btn-square btn-ghost">
        <loginSVG />
      </button>
    </router-link> 
  </div>
</div>
</template>
