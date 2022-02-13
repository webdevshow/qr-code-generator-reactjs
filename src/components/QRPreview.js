import React, { useContext } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import QRCode from 'qrcode.react';

import useForm from '../hooks/useForm';
import QRDataContext from '../contexts/QRDataContext';

const QRPreview = () => {
	const { qrCodeData } = useContext(QRDataContext);
	const [formState, onFormFieldChange] = useForm({
		foreGroundColor: '#000000',
		backgroundColor: '#ffffff',
		size: '128',
	});

	const onDownloadQRBtnClick = () => {
		// 1. Get the qr canvas element from the DOM
		//2. Convert the qr canvas element content to base64 jpeg data URI.
		//3. Create a new link <a></a> element
		//4. Add the download attribute to the link element to specify the downloaded file name.
		//5. Assign the image data URI value to the href attribute of the link element.
		//6. Trigger the click of the link element so that the file is downloaded on the user's system.

		const qrCanvas = document.getElementById('qr-canvas');
		const qrCanvasDataURI = qrCanvas.toDataURL('image/jpeg', 1.0);
		const linkElement = document.createElement('a');
		linkElement.download = 'my-qr.jpeg';
		linkElement.href = qrCanvasDataURI;
		linkElement.click();
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>QR Code Preview</Card.Title>
				<div className='d-flex justify-content-center mt-4'>
					{qrCodeData && (
						<QRCode
							id='qr-canvas'
							value={qrCodeData}
							size={+formState.size}
							fgColor={formState.foreGroundColor}
							bgColor={formState.backgroundColor}
							includeMargin={true}
						/>
					)}
				</div>
				<Row className='mt-5'>
					<Col>
						<span>Foreground Color : </span>
						<input
							type='color'
							name='foreGroundColor'
							value={formState.foreGroundColor}
							onChange={onFormFieldChange}
						/>
					</Col>
					<Col>
						<span>Background Color : </span>
						<input
							type='color'
							name='backgroundColor'
							value={formState.backgroundColor}
							onChange={onFormFieldChange}
						/>
					</Col>
				</Row>
				<Row className='mt-3'>
					<Col>
						<span>Size : </span>
						<Form.Select
							aria-label='Size'
							name='size'
							value={formState.size}
							onChange={onFormFieldChange}
						>
							<option value='128'>128</option>
							<option value='256'>256</option>
						</Form.Select>
					</Col>
				</Row>
			</Card.Body>
			<Card.Footer className='d-flex justify-content-center'>
				<Button variant='primary' onClick={onDownloadQRBtnClick}>
					Download QR JPEG
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default QRPreview;
