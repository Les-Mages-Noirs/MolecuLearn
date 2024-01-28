<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import MoleculeCard from "../components/Cards/MoleculeCard.vue";
import { ref } from "vue";

interface MoleculeCardProps {
  name: string;
  symbol: string;
  atomicNumber: number;
}

const moleculesList = ref<MoleculeCardProps[]>([
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
  },
]);
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
    <div class="p-20 flex flex-col justify-center items-center">
      <div class="text-4xl font-bold">Les recettes</div>
      <div class="pt-6 w-1/3">
        <SearchBar />
      </div>
    </div>
    <div class="min-h-full">
      <div
        class="grid grid-flow-row gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-12"
      >
        <MoleculeCard
          v-for="molecule in moleculesList"
          :key="molecule.atomicNumber"
          :name="molecule.name"
          :symbol="molecule.symbol"
          :atomicNumber="molecule.atomicNumber"
        />
      </div>
    </div>
  </div>
</template>
