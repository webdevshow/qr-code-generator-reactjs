import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import URLForm from './URLForm';
import NormalTextForm from './NormalTextForm';
import VCard from './VCard';

const QRFormsContainer = () => {
	const [key, setKey] = useState('url');

	return (
		<Tabs id='qr-forms-tab' activeKey={key} onSelect={(k) => setKey(k)} className='mb-3'>
			<Tab eventKey='url' title='URL'>
				<URLForm />
			</Tab>
			<Tab eventKey='text' title='Text'>
				<NormalTextForm />
			</Tab>
			<Tab eventKey='vcard' title='VCard'>
				<VCard />
			</Tab>
		</Tabs>
	);
};

export default QRFormsContainer;
