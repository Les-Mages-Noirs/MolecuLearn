import { createRouter, createWebHashHistory } from "vue-router"; 
import Hero from "../views/Hero.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", component: Hero },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
