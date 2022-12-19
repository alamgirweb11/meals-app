<template>
    <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals by Ingredients
    </h1>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import Meals from "../components/Meals.vue";
import { computed } from "@vue/reactivity"
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
      store.dispatch("searchMealsByIngredient", route.params.ingredient)
})
</script>
<style>
    
</style>