<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Molecule } from "../api/types";

defineEmits<{
  (event: "closeModal"): void;
}>();

defineProps<{
  molecule: Molecule;
}>();
</script>
<template>
  <div
    class="p-6 absolute top-1/3 left-1/3 border border-gray-200 rounded-md z-10"
  >
    <div class="p-2 flex items-center justify-between">
      <div class="text-2xl font-bold">{{ molecule.name }}</div>
      <button class="btn" @click="$emit('closeModal')">X</button>
    </div>

    <div class="text-xl py-6">
      qosidhfkqsldfmqlskdjhf lqsjdf mlkqsjdfmlkqjsdflkjqsdpf
    </div>
  </div>
</template>
