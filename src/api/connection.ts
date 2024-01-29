import { API } from './api';
import { AtomNode, Connection, Molecule } from './types';

export const createConnection = async (atom1: AtomNode, atom2: AtomNode, value: number, molecule: Molecule): Promise<Connection> => {
	console.log('request', { atom1: atom1['@id'], atom2: atom2['@id'], value, molecule: molecule['@id'] });
	const body = await API.post<Connection>('/api/connections', { atom1: atom1['@id'], atom2: atom2['@id'], value, molecule: molecule['@id'] });
	return body;
};

export const getConnectionFromIRI = async (IRI: string) => {
	const body = await API.get<Connection>(IRI);
	return body;
};



