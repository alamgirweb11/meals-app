<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold text-orange-500 mb-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      placeholder="Search for ingredients"
    />
    <div
      v-for="(ingredient, index) in computedIngredients"
      :key="index"
      class="bg-white mt-4 p-3 mb-3 rounded shadow"
    >
      <h3 class="text-2xl mb-2 font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
      <div class="mt-4 mb-3">
        <router-link
          :to="{
            name: 'mealsByIngredient',
            params: { ingredient: ingredient.strIngredient },
          }"
          class="border-2 text-white rounded-md border-sky-500 px-2 py-2 bg-sky-500 hover:bg-sky-600 transition-colors shadow-md"
          >View Details</router-link
        >
      </div>
    </div>
    <div v-if="!computedIngredients.length"
        class="bg-white rounded shadow p-8 mt-4"
        >
        <h3 class="text-xl mb-2 font-bold text-center text-orange-500">Search result not match!</h3>
    </div>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((ing) =>
    ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
