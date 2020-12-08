import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { Contact } from 'actions/redux/contact/interfaces';
import { TranslateFunction } from 'react-localize-redux';
import { Col, Container, Row } from 'react-bootstrap';
import ContactTable from '../ContactTable';
// import FilterableContactTableActions, { filterableContactTableSelector } from 'actions/redux/filterableContactTable';

interface Props {
	contacts: Contact[];
	translate: TranslateFunction;
}

/* interface State {
	filterText: string;
	inStockOnly: boolean;
	selectedProduct: Contact | null;
} */

class FilterableContactTable extends React.Component<Props> {
	render() {
		const { contacts, translate } = this.props;
		return (
			<Container fluid>
				<Row>
					<Col lg={8}>
						<ContactTable
							contacts={contacts}
							translate={translate}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default baseConnect(FilterableContactTable,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	}
);