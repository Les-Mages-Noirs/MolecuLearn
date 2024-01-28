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

    <div class="text-lg py-6">
      <span class="text-gray-400"> Masse atomique :</span>
      <span class="text-black"> {{ atom.atomicMass }}</span>
    </div>
    <div class="text-lg py-6">
      <span class="text-gray-400"> Masse atomique :</span>
      <span class="text-black"> {{ atom.atomicMass }}</span>
    </div>
    <div class="text-lg py-6">
      <span class="text-gray-400"> Masse atomique :</span>
      <span class="text-black"> {{ atom.atomicMass }}</span>
    </div>
  </div>
</template>
