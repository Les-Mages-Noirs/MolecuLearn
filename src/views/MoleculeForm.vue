<script setup lang="ts">
import { useRouter } from 'vue-router';
import MoleculeCreator from '../components/MoleculeCreator.vue';
import { userStore } from '../store/user';
import { useToast } from 'vue-toastification';

const router = useRouter();
console.log(userStore.isLoggedIn())
console.log("aaaaaaa")
if (!userStore.isLoggedIn()) {
  router.push('/molecules');
  useToast().error('Vous devez être connecté pour accéder à cette page');
}
</script>

<template>
    <MoleculeCreator />
</template>
