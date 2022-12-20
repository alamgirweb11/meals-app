<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>
<script 
setup>
import Meals from "../components/Meals.vue";
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

const keyword = ref("");

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.dispatch("searchMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>