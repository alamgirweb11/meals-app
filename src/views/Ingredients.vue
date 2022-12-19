<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <div v-for="(ingredient, index) in ingredients" :key="index"
        class="bg-white p-3 mb-3 rounded shadow"
        >
        <h3 class="text-2xl mb-2 font-bold">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
        <div class="mt-4 mb-3">
        <router-link :to="{name: 'mealsByIngredient', params: { ingredient: ingredient.strIngredient }}" class="border-2 text-white rounded-md border-sky-500 px-2 py-2 bg-sky-500 hover:bg-sky-600 transition-colors shadow-md">View Details</router-link>
    </div>
    </div>
    </div>
</template>
<script setup>
import { onMounted,ref } from 'vue'
import axiosClient from '../axiosClient';

const ingredients = ref([])

onMounted(() => {
      axiosClient.get('list.php?i=list')
      .then(({ data }) => {
         ingredients.value = data.meals
      })
})
</script>
