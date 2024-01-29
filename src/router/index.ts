import { createRouter, createWebHistory  } from 'vue-router';
import Hero from '../views/Hero.vue';
import Molecules from '../views/Molecules.vue';
import Atomes from '../views/Atomes.vue';
import LoginVue from '../views/Login.vue';
import SignupVue from '../views/Signup.vue';
import Profile from '../views/Profile.vue';

const routes = [
	{ path: '/', component: Hero },
	{ path: '/login', component: LoginVue },
	{ path: '/signup', component: SignupVue },
	{ path: '/molecules', component: Molecules },
	{ path: '/atomes', component: Atomes },
	{ path: '/profile', component: Profile },
];

const router = createRouter({
	history: createWebHistory (),
	routes : routes
});

export default router;
