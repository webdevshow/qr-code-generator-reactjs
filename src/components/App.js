import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import QRFormsContainer from './QRFormsContainer';
import QRPreview from './QRPreview';
import QRDataContext from '../contexts/QRDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [qrCodeData, setQRCodeData] = useState('');

	const updateQRCodeDataValue = (value) => {
		setQRCodeData(value);
	};

	return (
		<QRDataContext.Provider value={{ qrCodeData, updateQRCodeDataValue }}>
			<Container>
				<Row>
					<Col sm={7}>
						<QRFormsContainer />
					</Col>
					<Col sm={5}>
						<QRPreview />
					</Col>
				</Row>
			</Container>
		</QRDataContext.Provider>
	);
};

export default App;
