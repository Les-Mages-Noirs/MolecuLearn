<script setup lang="ts">
import { Molecule } from "../../api/types";
import ModalMolecule from "../ModalMolecule.vue";
import { ref, defineProps } from "vue";

const props = defineProps<{
  molecule: Molecule;
  updateList: () => void;
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
      <p>{{ molecule.description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="openModal">Infos</button>
      </div>
    </div>
  </div>
  <Teleport to="#modal-portal">
    <ModalMolecule
      v-if="showModal"
      @closeModal="closeModal"
      :molecule="props.molecule"
      :updateList="() => props.updateList()"
    />
  </Teleport>
</template>
