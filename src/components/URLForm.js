import React, { useContext } from 'react';

import { Form, Button } from 'react-bootstrap';

import useForm from '../hooks/useForm';
import QRDataContext from '../contexts/QRDataContext';

const URLForm = () => {
	const { updateQRCodeDataValue } = useContext(QRDataContext);

	const [formState, onFormFieldChange] = useForm({ url: '' });

	const onURLFormSubmit = (e) => {
		e.preventDefault();
		updateQRCodeDataValue(formState.url);
	};

	return (
		<Form onSubmit={onURLFormSubmit}>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Enter URL</Form.Label>
				<Form.Control
					type='text'
					placeholder='https://yourdomain.com'
					name='url'
					value={formState.url}
					onChange={onFormFieldChange}
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Generate QR Code
			</Button>
		</Form>
	);
};

export default URLForm;
