<script setup lang="ts">
import AtomCard from '../components/AtomCard.vue';
import type { AtomCardProps } from '../utils/types';
import { ref } from 'vue';

const atomsList = ref<AtomCardProps[]>([ {
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
}, {
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},{
  name: 'Hydrogen',
  symbol: 'H',
  atomicNumber: 1,
},]);



</script>

<template>
    <div class="min-h-[calc(100vh-4rem)] bg-red-500 flex overflow-hidden">
        <div class="h-full w-2/3 bg-blue-500 border-r-2 border-black ">
            a
        </div>
        <div class="h-full w-1/3 flex flex-col gap-4  bg-blue-200 overflow-auto ">
            <AtomCard v-for="atom in atomsList" :name="atom.name" :symbol="atom.symbol" :atomic-number="atom.atomicNumber"  />
        </div>
    </div>
</template>