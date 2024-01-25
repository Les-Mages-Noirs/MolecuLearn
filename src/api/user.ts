import { API } from './api';
import { User } from './types';

interface GetUsersBody {
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:totalItems': number;
    'hydra:member': User[];
}
type NewUser = {
    email: string;
    username: string;
    password: string;
};


export const getUsers = async (): Promise<User[]> => {
    const body = await API.get<GetUsersBody>('/users');
    return body['hydra:member'];
};

export const addUser = async (user: NewUser): Promise<User> => {
    const body = await API.post<User>('/users', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return body;
}