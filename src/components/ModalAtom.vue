<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Atom } from "../api/types";

defineEmits<{
  (event: "closeModal"): void;
}>();

defineProps<{
  atom: Atom;
}>();
</script>

<template>
  <div
    class="bg-white p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-md z-10"
  >
    <div class="p-2 flex items-center justify-between">
      <div class="text-2xl font-bold">{{ atom.name }}</div>
      <button class="btn" @click="$emit('closeModal')">X</button>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Numéro atomique : </span>
      <span class="text-black font-semibold ml-2">{{ atom.atomicNumber }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Symbole : </span>
      <span class="text-black font-semibold ml-2">{{ atom.symbol }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Point de fusion : </span>
      <span class="text-black font-semibold ml-2">{{ atom.fusionPoint }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Point d'ébullition : </span>
      <span class="text-black font-semibold ml-2">{{ atom.boilingPoint }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Masse atomique : </span>
      <span class="text-black font-semibold ml-2">{{ atom.atomicMass }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Masse volumique : </span>
      <span class="text-black font-semibold ml-2">{{ atom.volumicMass }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Découverte : </span>
      <span class="text-black font-semibold ml-2">{{ atom.discovery }}</span>
    </div>

    <div class="text-lg py-4">
      <span class="text-gray-400">Découvert par : </span>
      <span class="text-black font-semibold ml-2">{{ atom.discoverer }}</span>
    </div>
  </div>
</template>
