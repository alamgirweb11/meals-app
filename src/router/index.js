import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import MealListByLetter from '../views/MealListByLetter.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/letter/:letter",
    name: "MealListByLetter",
    component: MealListByLetter
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
