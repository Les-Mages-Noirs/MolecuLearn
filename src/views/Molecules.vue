<script setup lang="ts">
import MoleculeCard from "../components/Cards/MoleculeCard.vue";
import { ref } from "vue";
import { Molecule } from "../api/types";
import { getMolecules } from "../api/molecule";
import { userStore } from "../store/user";

const moleculesList = ref<Molecule[]>([]);
const fetchMoleculeList = async () => {
  console.log("fetching molecules");

  moleculesList.value = await getMolecules();
};

fetchMoleculeList();
</script>

<template>
  <div id="modal-portal"></div>

  <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
    <div class="p-20 flex flex-col justify-center items-center">
      <div class="text-4xl font-bold">Les Molécules</div>
      <a v-if="userStore.isLoggedIn()" href="/molecules/create">Ajouter</a>
    </div>
    <div class="min-h-full">
      <div
        class="grid grid-flow-row gap-8 sm:grid-cols-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-12 w-"
      >
        <MoleculeCard
          v-for="molecule in moleculesList"
          :key="molecule.id"
          :molecule="molecule"
          :updateList="() => fetchMoleculeList()"
        />
      </div>
    </div>
  </div>
</template>
