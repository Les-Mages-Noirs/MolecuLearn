import { API } from './api';
import { Atom, AtomNode } from './types';

export const createAtomNode = (atom: Atom) => {
	const atomNode = API.post<AtomNode>('/api/atom_nodes', {
		atom: atom['@id']
	});
	return atomNode;
};

export const getAtomNodeFromIRI = async (IRI: string) => {
	const body = await API.get<AtomNode>(IRI);
	return body;
};
