<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import AtomCard from "../components/Cards/AtomCard.vue";
import { ref } from "vue";
import { getAtoms } from "../api/atom";
import { Atom } from "../api/types";

const atomList = ref<Atom[]>([]);
const fetchAtomList = async () => {
  atomList.value = await getAtoms();
};

fetchAtomList();



</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
    <div class="p-20 flex flex-col justify-center items-center">
      <div class="text-4xl font-bold">Les ingrédients</div>
      <div class="pt-6 w-1/3">
        <SearchBar />
      </div>
    </div>
    <div class="h-auto">
      <router-link class="btn btn-ghost text-xl" to="/addingredient">Nouvelle ingredient</router-link>
      <div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-28">
        <AtomCard v-for="atom in atomList" :atom="atom"/>
      </div>
    </div>
  </div>
</template>
