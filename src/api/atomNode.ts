import { API } from './api';
import { Atom, AtomNode } from './types';

export const createAtomNode = (atom: Atom) => {
	const atomNode = API.post<AtomNode>('/api/atom_nodes', {
		atom: atom['@id']
	});
	return atomNode;
};
