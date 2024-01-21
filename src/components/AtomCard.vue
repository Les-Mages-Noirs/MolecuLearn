<script setup lang="ts">
import type { AtomCardProps } from '../utils/types';
import { defineProps } from 'vue';

const props = defineProps<AtomCardProps>();

</script>

<template>
  <div class="card bordered shadow-lg bg-green-600 w-40 h-44">
    <div class="card-body">
      <div class="">{{ props.atomicNumber }}</div>
      <div class="">{{ props.name }}</div>
      <div class="">{{ props.symbol }}</div>
    </div>
  </div>
</template>
  