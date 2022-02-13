import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import useForm from '../hooks/useForm';
import QRDataContext from '../contexts/QRDataContext';

const NormalTextForm = () => {
	const [formState, onFormFieldChange] = useForm({ text: '' });
	const { updateQRCodeDataValue } = useContext(QRDataContext);

	const onURLFormSubmit = (e) => {
		e.preventDefault();
		updateQRCodeDataValue(formState.text);
	};

	return (
		<Form onSubmit={onURLFormSubmit}>
			<Form.Group className='mb-3'>
				<Form.Label>Enter some text to generate a QR code</Form.Label>
				<Form.Control
					as='textarea'
					rows={10}
					name='text'
					value={formState.text}
					onChange={onFormFieldChange}
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Generate QR Code
			</Button>
		</Form>
	);
};

export default NormalTextForm;
