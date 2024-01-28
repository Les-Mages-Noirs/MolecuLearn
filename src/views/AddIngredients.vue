<script setup lang="ts">

</script>

<template>
    <div class="min-h-[calc(100vh-4rem)] flex flex-col w-full">
        <div class="p-20 flex flex-col justify-center items-center">
            <div class="text-4xl font-bold mb-10">Ajouter un ingrédient</div>
            <div class="pt-6 w-1/3 space-y-5">


                <input type="text" placeholder="Numéro atomique"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Symbole"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Nom"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Point de fusion"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Point d'ébullition"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Masse atomique"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Masse volumique"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Année de découverte"
                    class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <input type="text" placeholder="Découvert par"
                    class=" w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                <div class="p-9 w-full">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full ">
                        Ajouter</button>
                </div>
            </div>
        </div>
        <div class="h-auto">
        </div>
    </div>
</template>
  