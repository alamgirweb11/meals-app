<template>
    <div>
        <h1 class="text-center text-purple-500">{{ meals }}</h1>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import store from '../store'

const meals = computed(() => store.state.meals)

</script>
<style>
    
</style>