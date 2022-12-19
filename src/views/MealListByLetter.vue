<template>
    <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals by Letter
    </h1>
  </div>
     <div class="flex justify-center gap-2 mt-2 text-2xl font-semibold">
            <router-link
            v-for="letter of letters"
            :key="letter"
            :to="{name: 'mealsListByLetter', params: {letter} }"
            >
            {{ letter }}
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
            <MealItem v-for="(meal, index) in meals" :key="index" :meal="meal" />
        </div>
</template>
<script setup>
import MealItem from "../components/MealItem.vue";
import { computed } from "@vue/reactivity"
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch("searchMealsByLetter", route.params.letter)
})

onMounted(() => {
      store.dispatch("searchMealsByLetter", route.params.letter)
})
</script>
<style>
    
</style>