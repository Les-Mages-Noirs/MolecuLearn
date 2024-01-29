import { userStore } from '../store/user';
import { API } from './api';
import { Molecule } from './types';

interface GetMoleculesBody {
	'@context': string;
	'@id': string;
	'@type': string;
	'hydra:totalItems': number;
	'hydra:member': Molecule[];
}

export const getMolecules = async (): Promise<Molecule[]> => {
	const body = await API.get<GetMoleculesBody>('/api/molecules');
	return body['hydra:member'];
};

interface GetMoleculeByIdBody extends Molecule {}

export const getMoleculeById = async (id: string): Promise<Molecule> => {
	const body = await API.get<GetMoleculeByIdBody>(`/api/molecules/${id}`);
	return body;
};

interface GetMoleculesByUserIdBody {
	'hydra:member': Molecule[];
}

export const getMoleculesByUserId = async (userId: string): Promise<Molecule[]> => {
	const body: GetMoleculesByUserIdBody = await API.get(`/api/user/${userId}/molecules`);
	return body['hydra:member'];
};

export const createMolecule = async (name: string): Promise<Molecule> => {
	if (!userStore.isLoggedIn()) throw new Error('User not logged in');
	const userIRI = userStore.getUser()['@id'];
	const body = await API.post<Molecule>(`/api/molecules`, { name, connections: [] });
	return body;
};

export const deleteMolecule = async (id: number): Promise<void> => {
	await API.delete(`/api/molecules/${id}`);
};
