<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full h-48 object-cover rounded-t-2xl"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ meal.strInstructions ?  meal.strInstructions.substring(0, 100) + '...' : ''  }}
      </p>
      <div class="flex items-center justify-between">
        <youtube-button :youtubeLink="meal.strYoutube">
          Youtube
        </youtube-button>
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-3 py-2 rounded border-2 text-white border-sky-500 bg-sky-500 hover:bg-sky-600 transition-colors"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const props = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
