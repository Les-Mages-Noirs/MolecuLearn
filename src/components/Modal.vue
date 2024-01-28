
<script setup lang="ts">
import { defineProps } from "vue";
import type { Molecule } from "../api/types";

const props = defineProps<{
  molecule: Molecule;
}>();


</script>
<template>
  <dialog id="my_modal_2" class="modal">
    <!-- Modal content -->
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ props.molecule.name }}</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <!-- Close button -->
    <form method="dialog" class="modal-backdrop">
      <button @click="$emit('closeModal')">close</button>
    </form>
  </dialog>
</template>
