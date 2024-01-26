import { API } from './api';
import { User } from './types';

interface GetUsersBody {
	'@context': string;
	'@id': string;
	'@type': string;
	'hydra:totalItems': number;
	'hydra:member': User[];
}

export const getUsers = async (): Promise<User[]> => {
	const body = await API.get<GetUsersBody>('/users');
	return body['hydra:member'];
};

interface GetUserByIdBody extends User {}

export const getUserById = async (id: string): Promise<User> => {
	const body = await API.get<GetUserByIdBody>(`/users/${id}`);
	return body;
};

interface NewUser {
	email: string;
	username: string;
	plainPassword: string;
}

interface CreateUserBody {
	'@context': string;
	'@id': string;
	'@type': string;
	id: number;
	email: string;
	username: string;
}

export const addUser = async (newUser: NewUser): Promise<User> => {
	return await API.post<CreateUserBody>('/users', newUser);
};

interface UpdateUser {
	email: string;
	username: string;
	plainPassword: string;
}

interface UpdateUserBody {
	'@context': string;
	'@id': string;
	'@type': string;
	id: number;
	email: string;
	username: string;
}

export const updateUser = async (id: string, updateUser: UpdateUser): Promise<User> => {
	return await API.patch<UpdateUserBody>(`/users/${id}`, updateUser);
};

type DeleteUserBody = string;

export const deleteUser = async (id: string): Promise<string> => {
	return await API.delete<DeleteUserBody>(`/users/${id}`);
};

interface AuthBody {
	token: string;
}
export const auth = async (username: string, password: string): Promise<string> => {
	const body = await API.post<AuthBody>('/login_check', { username, password });
	return body.token;
};
