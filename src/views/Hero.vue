<script setup lang="ts">
//import heroGradient from "../../public/img/hero-gradient.svg";
</script>

<template>
  <div class="hero min-h-[calc(100vh-4rem)]">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="../../public/img/science.jpeg" class="2xl:max-w-4xl max-w-xl" />
      <div>
        <h1 class="text-6xl font-bold lg:text-8xl">MOLECULEARN</h1>
        <p class="py-6 text-xl lg:text-2xl w-2/3 lg:w-full">
          Découvrez <strong class="text-primary">MolecuLearn</strong>, votre
          laboratoire virtuel pour explorer le monde fascinant des atomes dans
          les molécules.
        </p>
        <div class="space-x-6">
          <router-link class="btn btn-primary" to="/molecules"
            >Molécules</router-link
          >
          <router-link class="btn" to="/signup">S'inscrire</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
