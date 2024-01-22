<script setup lang="ts">
import AtomCard from '../components/AtomCard.vue';
import type { AtomCardProps } from '../utils/propsTypes';
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
    <div class="min-h-[calc(100vh-4rem)] flex overflow-hidden">
        <div class="min-h-full w-2/3 border-r-2 border-black ">
            
        </div>
        <div class="min-h-full w-1/3 flex flex-row flex-wrap gap-6 p-6">
            <AtomCard v-for="atom in atomsList" :name="atom.name" :symbol="atom.symbol" :atomic-number="atom.atomicNumber"  />
        </div>
    </div>

</template>