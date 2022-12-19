<template>
     <header class="bg-white shadow h-16 flex justify-between items-stretch">
            <div class="header-item-left">
                <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 text-orange-500 font-bold">Home</router-link>
            </div>
            <div class="header-item-right flex gap-1 items-center">
                <router-link :to="{ name: 'mealsByName' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">Search Meals</router-link>
                <router-link :to="{ name: 'mealsListByLetter' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">Meals By Letter</router-link>
                <router-link :to="{ name: 'ingredients' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">Meals By Ingredients</router-link>
            </div>
        </header>
</template>
