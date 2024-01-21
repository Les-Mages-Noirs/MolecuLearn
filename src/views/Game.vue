<script setup lang="ts">
import AtomCard from '../components/AtomCard.vue';
import { ref } from 'vue';

const AtomsList = ref()

</script>

<template>
    <div class="min-h-[calc(100vh-4rem)] bg-red-500 flex">
        <div class="h-full w-2/3 bg-blue-500 border-r-2 border-black ">
            a
        </div>
        <div class="h-full w-1/3 flex flex-col bg-blue-200">
            a
        </div>
    </div>
</template>