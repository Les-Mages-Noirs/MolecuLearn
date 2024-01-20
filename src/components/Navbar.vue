<script setup lang="ts">
import loginSVG from "../../public/img/login.svg";
</script>

<template>
<div class="navbar bg-base-100">
  <div class="flex-1 space-x-12">
    <a class="btn btn-ghost text-xl">Accueil</a>
    <a class="btn btn-ghost text-xl">Recettes</a>
    <a class="btn btn-ghost text-xl">Jouer</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
        <loginSVG />
    </button>
  </div>
</div>
</template>
