<template>
     <div class="p-8">
        <input type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for meals"
        @change="searchMeals"
        >
        <br>
        <pre>{{ meals }}</pre>
       </div>
</template>
<script setup>
 import { computed } from '@vue/reactivity';
 import { ref } from 'vue';
 import store from '../store';

 const meals = computed(() => store.state.searchedMeals)

 const keyword = ref("")

 function searchMeals() {
      if(keyword.value){
       store.dispatch('searchMeals', keyword.value)
     } else {
        store.dispatch('searchMeals', [])
     }
 }

</script>
<style>
    
</style>