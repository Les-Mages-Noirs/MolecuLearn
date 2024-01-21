<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { getMolecules } from './api/molecule';


getMolecules().then((molecules) => {
  console.log(molecules);
});
</script>

<template >
  <Navbar />
  <RouterView />
</template>
