import { reactive } from 'vue';
import { User } from '../api/types';
import { auth, getMe } from '../api/user';

export const userStore = reactive({
	user: {} as User,
	setUser(user: User) {
		this.user = user;
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

		if (!token) return false;
		this.setToken(token);
		return true;
	},
	async logout() {
		this.setToken('');
		removeTokenFromLocalStorage();
	},
	isLoggedIn() {
		return !!this.token;
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
			return user;
		} catch (error) {
			console.log(error);
		}
	}
	return {} as User;
}

userStore.setUser(await retrieveUserFromAPI());
