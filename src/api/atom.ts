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
	const body = await API.get<GetAtomsBody>('/api/atoms');
	return body['hydra:member'];
};

interface GetAtomByIdBody extends Atom {
	'@context': string;
	'@id': string;
	'@type': string;
}

export const getAtomById = async (id: string): Promise<Atom> => {
	const body = await API.get<GetAtomByIdBody>(`/api/atoms/${id}`);
	return body;
};

interface newAtom {
	atomicNumber: number;
	symbol: string;
	name: string;
	fusionPoint: number;
	boilingPoint: number;
	atomicMass: number;
	volumicMass: number;
	discovery: number;
	discoverer: string;
}

export const addAtom = async (newAtom: newAtom): Promise<Atom> => {
	return await API.post<Atom>('/api/atoms', newAtom);
};

export const getAtomFromIRI = async (IRI: string) => {
	const body = await API.get<Atom>(IRI);
	return body;
};
