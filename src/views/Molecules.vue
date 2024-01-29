<script setup lang="ts">
import MoleculeCard from "../components/Cards/MoleculeCard.vue";
import { ref } from "vue";
import { Molecule } from "../api/types";

const moleculesList = ref<Molecule[]>([
  //fake molecules
  {
    "@context": "/api/contexts/Molecule",
    "@id": "/api/molecules/1",
    "@type": "Molecule",
    id: 1,
    name: "Methane",
    connections: [],
  },
]);
</script>

<template>
  <div id="modal-portal"></div>
  <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
    <div class="p-20 flex flex-col justify-center items-center">
      <div class="text-4xl font-bold">Les Molécules</div>
    </div>
    <div class="min-h-full">
      <div
        class="grid grid-flow-row gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-12"
      >
        <MoleculeCard
          v-for="molecule in moleculesList"
          :key="molecule.id"
          :molecule="molecule"
        />
      </div>
    </div>
  </div>
</template>
