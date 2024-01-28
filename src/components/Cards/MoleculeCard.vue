<script setup lang="ts">
import { Molecule } from "../../api/types";
import Modal from "../Modal.vue";
import { ref } from "vue";

const props = defineProps<{
  molecule: Molecule;
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
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ molecule.name }}</h2>
      <p>truc a mettre ici pour voir un peu mieux</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="openModal">Infos</button>
      </div>
    </div>
  </div>
  <Teleport to='#modal-portal'>
    <Modal v-if="showModal" @closeModal="closeModal" :molecule="props.molecule" />
  </Teleport>
</template>
