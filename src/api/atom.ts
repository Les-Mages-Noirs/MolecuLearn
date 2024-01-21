import { API } from './api';
import { Atom } from './types';

interface GetAtomsBody {
	'@context': string;
	'@id': string;
	'@type': string;
	'hydra:totalItems': number;
	'hydra:member': Atom[];
}

export const getAtoms = async (): Promise<Atom[]> => {
	const body = await API.get<GetAtomsBody>('/atoms');
	return body['hydra:member'];
};

interface GetAtomByIdBody extends Atom {
	'@context': string;
	'@id': string;
	'@type': string;
}

export const getAtomById = async (id: string): Promise<Atom> => {
	const body = await API.get<GetAtomByIdBody>(`/atoms/${id}`);
	return body;
};
