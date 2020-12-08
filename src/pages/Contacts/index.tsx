import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
import data from 'requests/Contacts.json';
import { Contact } from 'actions/redux/contact/interfaces';
import { Container } from 'react-bootstrap';
import FilterableContactTable from 'containers/contacts/FilterableContactTable';
// import ContactsActions, { contactsSelector } from 'actions/redux/contacts';

interface Props {
	translate: TranslateFunction;
}

class Contacts extends React.Component<Props> {
	contacts: Contact[] = data as any as Contact[];
	render() {
		return (
			<Container>
				<h1>Contacts List</h1>
				<FilterableContactTable contacts={this.contacts} />
			</Container>
		);
	}
}

export default baseConnect(Contacts,
	 () =>	{return {

		};
	},
	{
	});
