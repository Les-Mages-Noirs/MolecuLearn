export interface Molecule {
	'@context': string;
	'@id': string;
	'@type': string;
	id: number;
	name: string;
	description: string;
	connections: Connection[];
}

export interface Connection {
	'@type': string;
	'@id': string;
	id: number;
	atom1: AtomNode;
	atom2: AtomNode;
	value: number;
	molecule: string;
}

export interface AtomNode {
	'@type': string;
	'@id': string;
	id: number;
	atom: Atom;
}

export interface Atom {
	'@type': string;
	'@id': string;
	id: number;
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
export interface User {
	'@context': string;
	'@id': string;
	'@type': string;
	id: number;
	email: string;
	username: string;
}
