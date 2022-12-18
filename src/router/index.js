import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue';
import MealListByLetter from '../views/MealListByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByIngredient from '../views/MealsByIngredients.vue';
import MealDetails from '../views/MealDetails.vue';
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/letter/:letter?",
        name: "mealsListByLetter",
        component: MealListByLetter
      },
      {
        path: "/by-name/:name?",
        name: "mealsByName",
        component: MealsByName
      },
      {
        path: "/by-ingredients/:ingredient?",
        name: "mealsByIngredient",
        component: MealsByIngredient
      },
      {
        path: "meal/:id",
        name: "mealDetails",
        component: MealDetails
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
