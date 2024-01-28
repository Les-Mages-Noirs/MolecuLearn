<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import AtomCard from "../components/Cards/AtomCard.vue";
import type { AtomCardProps } from "../utils/propsTypes";
import { ref } from "vue";

const atomList = ref<AtomCardProps[]>([
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
      <div class="text-4xl font-bold">Les Atomes</div>
      <div class="pt-6 w-1/3">
        <SearchBar />
      </div>
    </div>
    <div class="h-auto">
      <div class="px-28">
        <router-link class="btn text-md " to="/addingredient">Ajouter un atome </router-link>
      </div>
      <div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-28">
        <AtomCard v-for="atom in atomList" :key="atom.atomicNumber" :name="atom.name" :symbol="atom.symbol"
          :atomicNumber="atom.atomicNumber" />
      </div>
    </div>
  </div>
</template>
