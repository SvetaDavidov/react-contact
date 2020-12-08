import { Contact } from 'actions/redux/contact/interfaces';
import * as React from 'react';

interface Props {
	contact: Contact
}

const ContactRow: React.FC<Props> = (props: Props) => {
	const { contact } = props;
	function onRowSelected(e: React.MouseEvent) {
		e.preventDefault(); // this for execese2
	}
	return (
		<tr onClick={onRowSelected} >
			<td>{contact.name.first}</td>
			<td>{contact.name.last}</td>
			<td>{contact.address}</td>
			<td>{contact.age}</td>
			<td>{contact.phone}</td>
			<td>{contact.email}</td>
		</tr>
	);
};
export default ContactRow;
