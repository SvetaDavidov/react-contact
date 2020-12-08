import { Contact } from 'actions/redux/contact/interfaces';
import * as React from 'react';
import { Table } from 'react-bootstrap';
import { TranslateFunction } from 'react-localize-redux';
import ContactRow from '../ContactRow';

interface Props {
	contacts: Contact[];
	translate: TranslateFunction;
}

const ContactTable: React.FC<Props> = (props: Props) => {
	const { contacts, translate } = props;
	function renderRows(): JSX.Element[] {
		const rows: JSX.Element[] = [];
		contacts.forEach((contact: Contact) => {


			rows.push(<ContactRow key={contact.id} contact={contact} />);
		});

		return rows;
	}
	return (
		<Table>
			<thead>
				<th>{translate('contacts.firstname')}</th>
				<th>{translate('contacts.lastname')}</th>
				<th>{translate('contacts.address')}</th>
				<th>{translate('contacts.age')}</th>
				<th>{translate('contacts.phone')}</th>
				<th>{translate('contacts.email')}</th>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</Table>
	);
};

export default ContactTable;
