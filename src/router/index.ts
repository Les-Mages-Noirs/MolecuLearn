import { createRouter, createWebHashHistory } from "vue-router"; 
import Hero from "../views/Hero.vue";
import Login from "../views/Login.vue";
import Game from "../views/Game.vue";
import Recipes from "../views/Recipes.vue";



const routes = [
  { path: "/", component: Hero },
  { path: "/login", component: Login },
  { path: "/game", component: Game },
  { path: "/recipes", component: Recipes },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
