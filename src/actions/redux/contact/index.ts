import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	ContactState, TypesNames, ActionCreator, ContactAction
} from './interfaces';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	setExample: ['exampleData']
});

export const ContactTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<ContactState>({
	exampleData: 'Initial Data Example'
});

/* ------------- Selectors ------------- */

export const contactSelector = {
	getExampleData: (state: ApplicationState) => state.contact.exampleData
};

/* ------------- Reducers ------------- */

const setExampleReducer = (state: ImmutableObject<ContactState>, action: ContactAction) => {
	const { exampleData } = action;
	return state.merge({ exampleData });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<ImmutableObject<any, any>(INITIAL_STATE, {
	[ContactTypes.SET_EXAMPLE]: setExampleReducer
});
