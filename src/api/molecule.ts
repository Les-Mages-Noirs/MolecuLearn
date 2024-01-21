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
	const body = await API.get<GetMoleculesBody>('/molecules');
	return body['hydra:member'];
};

interface GetMoleculeByIdBody extends Molecule {}

export const getMoleculeById = async (id: string): Promise<Molecule> => {
	const body = await API.get<GetMoleculeByIdBody>(`/molecules/${id}`);
	return body;
};

interface GetMoleculesByUserIdBody {
	'hydra:member': Molecule[];
}

export const getMoleculesByUserId = async (userId: string): Promise<Molecule[]> => {
	const body: GetMoleculesByUserIdBody = await API.get(`/user/${userId}/molecules`);
	return body['hydra:member'];
};
