<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
    <MealItem v-for="(meal, index) in meals" :key="index" :meal="meal" />
</div>
    <div v-if="!meals.length"
        class="bg-white rounded shadow p-8 mx-8"
        >
        <h3 class="text-xl mb-2 font-bold text-center text-orange-500">There are no meals!</h3>
    </div>
</template>
<script setup>
import MealItem from './MealItem.vue';

const props = defineProps({
     meals: {
         required: true,
         type: Array
     }
})
</script>
