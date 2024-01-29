<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Molecule } from "../api/types";
import { deleteMolecule } from "../api/molecule";

defineEmits<{
  (event: "closeModal"): void;
}>();

const props = defineProps<{
  molecule: Molecule;
  updateList: () => void;
}>();

const handleDelete = async () => {
  try {
    await deleteMolecule(props.molecule.id);
  } catch (e) {
    console.log(e);
  }
  console.log(props.updateList);

  props.updateList();
};
</script>
<template>
  <div
    class="p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white border-gray-200 rounded-md z-10"
  >
    <div class="p-2 flex items-center justify-between">
      <div class="text-2xl font-bold">{{ molecule.name }}</div>
      <button class="btn" @click="$emit('closeModal')">X</button>
    </div>

    <div class="text-xl py-6">
      {{ molecule.description }}
    </div>

    <div class="p-4 flex justify-center">
      <button class="btn btn-error" @click="handleDelete">Supprimer</button>
    </div>
  </div>
</template>
