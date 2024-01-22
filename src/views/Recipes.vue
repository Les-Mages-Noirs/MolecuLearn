<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
    <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
        <div class="p-20 flex flex-col justify-center items-center ">
            <div class="text-4xl font-bold ">Les Recettes</div>
            <div class="pt-6 w-1/3">
                <SearchBar />
            </div>
        </div>
        <div class="bg-blue-500 min-h-full">
            <div class="grid grid-cols-3 gap-4 p-20">
                On mettra la les cards de résultats
            </div>
        </div>
    </div>
</template> 
