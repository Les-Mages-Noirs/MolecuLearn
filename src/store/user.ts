import { reactive } from 'vue';
import { User } from '../api/types';
import { auth, getMe } from '../api/user';
import { useToast } from 'vue-toastification';

export const userStore = reactive({
	user: {} as User,
	setUser(user: User) {
		this.user = user;
	},
	getUser() {
		return this.user;
	},
	token: getTokenFromLocalStorage(),
	setToken(token: string) {
		this.token = token;
		setTokenToLocalStorage(token);
	},
	getToken() {
		return this.token;
	},
	async login(email: string, password: string) {
		const token = await auth(email, password);

		if (!token) {
			useToast().error('Identifiants incorrects');
			return false;
		}
		this.setToken(token);
		retrieveUserFromAPI();
		return true;
	},
	async logout() {
		this.setToken('');
		removeTokenFromLocalStorage();
		useToast().success('Déconnecté');
	},
	isLoggedIn() {
		return !!this.token;
	},
	isLoggedOut() {
		return !this.token;
	}


});

function getTokenFromLocalStorage() {
	const token = localStorage.getItem('token');
	return token || '';
}

function setTokenToLocalStorage(token: string) {
	localStorage.setItem('token', token);
}

function removeTokenFromLocalStorage() {
	localStorage.removeItem('token');
}

async function retrieveUserFromAPI() {
	if (userStore.isLoggedIn()) {
		try {
			const user = await getMe();
			console.log('user', user);
			userStore.setUser(user);
			console.log('zizi');

			useToast().success('Connecté en tant que ' + user.username);
		} catch (error) {
			console.log(error);

		}
	}
	return {} as User;
}





retrieveUserFromAPI();
