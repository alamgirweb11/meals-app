<template>
    <div class="flex flex-col p-8">
       <div>
        <input type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for meals"
        >
       </div>
        <div class="flex justify-center gap-2 mt-2">
            <router-link
            v-for="letter of letters"
            :key="letter"
            :to="{name: 'mealsListByLetter', params: {letter}}"
            >
            {{ letter }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient.js'

const meals = computed(() => store.state.meals)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const ingredients = ref([])

onMounted(async () => {
   const response = await axiosClient.get('/list.php?i=list')
   ingredients.value = response.data
})

</script>
<style>
    
</style>