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
            class="hover:scale-150 hover:text-orange-500 transition-colors"
            >
            {{ letter }}
            </router-link>
        </div>
        <Meals :meals="meals" />
</template>
<script setup>
import Meals from "../components/Meals.vue";
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