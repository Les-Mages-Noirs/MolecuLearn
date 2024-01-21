<script setup lang="ts">
import type { AtomCardProps } from '../utils/types';
import { defineProps } from 'vue';

const props = defineProps<AtomCardProps>();

</script>

<template>
  
  <div class="flex flex-col rounded-lg w-32 h-40 bg-green-500">
    <div class="w-full flex justify-start p-2">
      <div class="bg-white rounded-full w-6 flex justify-center items-center text-md">{{ props.atomicNumber }}</div>
    </div>
    <div class="px-4 flex flex-col justify-center">
      <h2 class="card-title text-4xl py-2">{{ props.symbol }}</h2>
      <p class="text-xl mt-2">{{ props.name }}</p>
    </div>

  </div>
</template>
  

