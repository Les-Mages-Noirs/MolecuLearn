<script setup lang="ts">
import { defineProps } from 'vue';


interface AtomCardProps {
	atomicNumber: number;
	symbol: string;
	name: string;
}


const props = defineProps<AtomCardProps>();



</script>

<template>
  <div class="card bordered shadow-lg bg-primary">
    <div class="card-body">
      <div class="">{{ props.atomicNumber }}</div>
      <div class="">{{ props.name }}</div>
      <div class="">{{ props.symbol }}</div>
    </div>
  </div>
</template>
  