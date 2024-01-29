<script setup lang="ts">
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
  <div id="modal-atom"></div>
  <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
    <div class="p-20 flex flex-col justify-center items-center">
      <div class="text-4xl font-bold">Les Atomes</div>
    </div>
    <div class="h-auto">
      <div
        class="grid grid-flow-row place-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-28"
      >
        <AtomCard v-for="atom in atomList" :atom="atom" :key="atom.id" />
      </div>
    </div>
  </div>
</template>
