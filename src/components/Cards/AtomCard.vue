<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Atom } from "../../api/types";
import ModalAtom from "../ModalAtom.vue";

const props = defineProps<{
  atom: Atom;
}>();

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div
    @click="openModal"
    class="flex flex-col rounded-lg w-32 h-40 bg-green-500"
  >
    <div class="w-full flex justify-start p-2">
      <div
      class="bg-white rounded-full w-6 flex justify-center items-center text-md"
      >
      {{ props.atom.atomicNumber }}
    </div>
  </div>
  <Teleport to="#modal-atom">
    <ModalAtom v-if="showModal" @closeModal="closeModal" :atom="props.atom" />
  </Teleport>
</template>
