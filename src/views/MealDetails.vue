<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category: </strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area: </strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags: </strong> {{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template
            v-for="(ingredient, ingredientIndex) in new Array(20)"
            :key="ingredientIndex"
          >
            <li v-if="meal[`strIngredient${ingredientIndex + 1}`]">
              {{ meal[`strIngredient${ingredientIndex + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template
            v-for="(measure, measureIndex) in new Array(20)"
            :key="measureIndex"
          >
            <li v-if="meal[`strMeasure${measureIndex + 1}`]">
              {{ meal[`strMeasure${measureIndex + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <youtube-button :youtubeLink="meal.strYoutube">Youtube</youtube-button>
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 px-3 py-2 rounded border-2 text-white border-sky-500 bg-sky-500 hover:bg-sky-600 transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
