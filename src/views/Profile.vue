<script setup lang="ts">
import { ref } from 'vue'

const isPremium = ref(false)

</script>

<template>
    <div class="min-h-[calc(100vh-4rem)] flex justify-center items-center">
        <div class="p-6 border border-gray-100 rounded-md h-1/3 w-1/2">     
             <div class="flex items-center justify-between">
                <div class="avatar">
                    <div class="w-32 rounded-full">
                    <img src="../../public/img/profile-pic.jpg" />
                    </div>
                </div>
                <div v-if="isPremium" class="badge badge-accent">Premium</div> 
                <button v-else class="btn">Passer à premium</button>
            </div>
            <div class="py-4 flex flex-col space-y-6"> 
                <h1 class="text-2xl font-bold">Tangay Masex</h1>
                <div class="flex flex-col space-y-2">
                    <span class="text-gray-400">Email : <span class="text-gray-600" >tanguy.legay@gmlail </span> </span>
                </div>
            </div>
            <div class="p-6 flex items-center justify-center">
                <button class="btn btn-error" >Déconnexion</button>
            </div>
        </div>
    </div>
</template>
