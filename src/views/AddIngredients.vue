<script setup lang="ts">
import { ref } from 'vue';
import { addAtom } from '../api/atom';

let atomicNumber = ref('');
let symbol = ref('');
let name = ref('');
let fusionPoint = ref('');
let boilingPoint = ref('');
let atomicMass = ref('');
let volumicMass = ref('');
let discovery = ref('');
let discoverer = ref('');

const submitForm = async () => {
    const newAtom = {
        atomicNumber: Number(atomicNumber.value),
        symbol: symbol.value,
        name: name.value,
        fusionPoint: Number(fusionPoint.value),
        boilingPoint: Number(boilingPoint.value),
        atomicMass: Number(atomicMass.value),
        volumicMass: Number(volumicMass.value),
        discovery: Number(discovery.value),
        discoverer: discoverer.value,
    };

    const result = await addAtom(newAtom);
    console.log(result);
};
</script>

<template>
    <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
        <div class="p-20 flex flex-col justify-center items-center">
            <div class="text-4xl font-bold mb-10">Ajouter un ingrédient</div>
            <div class="pt-6 w-1/3 space-y-5">


                <input v-model="atomicNumber" type="text" placeholder="Numéro atomique"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="symbol" type="text" placeholder="Symbole"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="name" type="text" placeholder="Nom"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="fusionPoint" type="text" placeholder="Point de fusion"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="boilingPoint" type="text" placeholder="Point d'ébullition"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="atomicMass" type="text" placeholder="Masse atomique"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="volumicMass" type="text" placeholder="Masse volumique"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="discovery" type="text" placeholder="Année de découverte"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input v-model="discoverer" type="text" placeholder="Découvert par"
                    class=" w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <div class="p-9 w-full">
                    <button @click="submitForm"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full ">
                        Ajouter</button>
                </div>
            </div>
        </div>
        <div class="h-auto">
        </div>
    </div>
</template>
  