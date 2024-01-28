import { createRouter, createWebHashHistory } from 'vue-router';
import Hero from '../views/Hero.vue';
import Recipes from '../views/Recipes.vue';
import Ingredients from '../views/Ingredients.vue';
import LoginVue from '../views/Login.vue';
import SignupVue from '../views/Signup.vue';
import Profile from '../views/Profile.vue';


const routes = [
	{ path: '/', component: Hero },
	{ path: '/login', component: LoginVue },
	{ path: '/signup', component: SignupVue },
	{ path: '/recipes', component: Recipes },
	{ path: '/ingredients', component: Ingredients },
	{ path: '/profile', component: Profile }

];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
