import { createRouter, createWebHashHistory } from 'vue-router';
import Hero from '../views/Hero.vue';
import Game from '../views/Game.vue';
import Recipes from '../views/Recipes.vue';
import Ingredients from '../views/Ingredients.vue';
import LoginVue from '../views/Login.vue';
import SignupVue from '../views/Signup.vue';

const routes = [
	{ path: '/', component: Hero },
	{ path: '/login', component: LoginVue },
	{ path: '/signup', component: SignupVue },
	{ path: '/game', component: Game },
	{ path: '/recipes', component: Recipes },
	{ path: '/ingredients', component: Ingredients }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
