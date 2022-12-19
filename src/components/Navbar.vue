<template>
     <header class="bg-white shadow h-16 flex justify-between items-stretch">
            <div class="header-item-left">
                <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">Home</router-link>
            </div>
            <div class="header-item-right flex gap-1 items-center">
                <router-link :to="{ name: 'mealsByName' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 ">Search Meals</router-link>
                <router-link :to="{ name: 'mealsListByLetter' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 ">Meals By Letter</router-link>
                <router-link :to="{ name: 'ingredients' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 ">Meals By Ingredients</router-link>
            </div>
        </header>
</template>
