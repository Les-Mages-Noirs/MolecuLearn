
<script setup lang="ts">
import { defineProps } from "vue";
import type { Molecule } from "../api/types";

defineEmits<{
    (event:'closeModal'): void
}>();

defineProps<{
  molecule: Molecule;
}>();

</script>
<template>

  <div class="p-6 absolute top-1/2 left-1/2 shadow-md rounded-md " >
    <button @click="$emit('closeModal')"> X </button>
    <div class="text-xl"> {{  molecule.name }} </div>
  </div>

</template>
