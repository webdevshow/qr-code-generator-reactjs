import React, { useContext } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import useForm from '../hooks/useForm';
import QRDataContext from '../contexts/QRDataContext';

const VCard = () => {
	const { updateQRCodeDataValue } = useContext(QRDataContext);
	const [formState, onFormFieldChange] = useForm({
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		company: '',
		street: '',
		city: '',
		state: '',
		country: '',
		website: '',
	});

	const getVCardQRData = () => {
		let startNode = `BEGIN:VCARD\nVERSION:3.0\n`;
		let endNode = 'END:VCARD';
		startNode += `N:${formState.lastName.trim()};${formState.firstName.trim()}\n`;
		startNode += `FN:${formState.firstName.trim()} ${formState.lastName.trim()}\n`;
		startNode += `EMAIL:${formState.email.trim()}\n`;
		startNode += `ORG:${formState.company.trim()}\n`;
		startNode += `URL:${formState.website.trim()}\n`;
		startNode += `TEL:${formState.mobile.trim()}\n`;
		startNode += `ADR:${formState.street.trim()};${formState.city.trim()};${formState.state.trim()};${formState.country.trim()}\n`;
		startNode += endNode;

		return startNode;
	};

	const onVCardSubmit = (e) => {
		e.preventDefault();
		const vCardFormattedData = getVCardQRData();
		updateQRCodeDataValue(vCardFormattedData);
	};

	return (
		<Form onSubmit={onVCardSubmit}>
			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>First name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter First name'
							name='firstName'
							value={formState.firstName}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>

				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Last name'
							name='lastName'
							value={formState.lastName}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							name='email'
							value={formState.email}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Mobile</Form.Label>
						<Form.Control
							type='text'
							placeholder='Mobile No'
							name='mobile'
							value={formState.mobile}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Company</Form.Label>
						<Form.Control
							type='text'
							placeholder='Company'
							name='company'
							value={formState.company}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Street</Form.Label>
						<Form.Control
							type='text'
							placeholder='Street'
							name='street'
							value={formState.street}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>City</Form.Label>
						<Form.Control
							type='text'
							placeholder='City'
							name='city'
							value={formState.city}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>

				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>State</Form.Label>
						<Form.Control
							type='text'
							placeholder='State'
							name='state'
							value={formState.state}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Country</Form.Label>
						<Form.Control
							type='text'
							placeholder='Country'
							name='country'
							value={formState.country}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>

				<Col>
					<Form.Group className='mb-3'>
						<Form.Label>Website</Form.Label>
						<Form.Control
							type='text'
							placeholder='https://website.com'
							name='website'
							value={formState.website}
							onChange={onFormFieldChange}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Button variant='primary' type='submit'>
				QR Code Generator
			</Button>
		</Form>
	);
};

export default VCard;
