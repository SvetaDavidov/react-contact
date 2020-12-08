import { Action } from 'redux';

export interface ContactState {
	exampleData: string;
}

export enum TypesNames {
	SET_EXAMPLE = 'SET_EXAMPLE'
}

export interface ActionCreator {
	setExample: (exampleData: string) => ContactAction;
}

export interface ContactAction extends Action<TypesNames.SET_EXAMPLE> {
	exampleData: string;
}

export interface Name {
	first: string;
	last: string;
}

export interface Friend {
	id: number;
	name: string;
}

export interface Contact {
	id: string;
	picture: string;
	age: number;
	eyeColor: string;
	name: Name;
	company: string;
	email: string;
	phone: string;
	address: string;
	about: string;
	friends: Friend[];
}



