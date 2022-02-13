import { useState } from 'react';

const useForm = (initialState = {}) => {
	const [formState, setFormState] = useState({ ...initialState });

	const onFormFieldChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormState({ ...formState, [name]: value });
	};

	return [formState, onFormFieldChange];
};

export default useForm;
