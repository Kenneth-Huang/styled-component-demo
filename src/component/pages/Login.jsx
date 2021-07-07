import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	PageLayout,
	Input,
	PasswordInput,
	Button,
	Spinner,
} from 'component/common/';

const Form = styled.form`
	background: white;
	color: black;
	width: 100%;
	max-width: 400px;
	border: 1px solid #eee;
	border-radius: 4px;
	padding: 15px;
	box-sizing: border-box;
	.alt-text {
		text-align: center;
		margin: 10px 0;
	}

	> ${Button}:first-of-type {
		margin-top: 20px;
	}
`;

const ValidationInfo = styled.div`
	background: white;
	border: ${(p) => (p.showError ? '1px' : '0px')} solid red;
	> span:first-of-type {
		color: red;
	}
	padding: 5px 10px;
	margin-bottom: 10px;
`;

let timeOut;

const Login = () => {
	const [formField, setFormField] = useState({ username: '', password: '' });
	const [fieldError, setFieldError] = useState({ username: '', password: '' });
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		return () => {
			if (timeOut) clearTimeout(timeOut);
		};
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormField((s) => ({ ...s, [name]: value }));
		// setFormField({ ...formField, [name]: value });
		// setFormField(Object.assign({}, formField, { [name]: value }));
	};

	const handleValidation = () => {
		let errors = { username: '', password: '' };
		let formIsValid = true;
		//Name
		if (!formField['username']) {
			formIsValid = false;
			errors['username'] = 'Cannot be empty';
		} else if (!formField['username'].match(/^[a-zA-Z]+$/)) {
			formIsValid = false;
			errors['username'] = 'Only letters allowed';
		}

		//Password
		if (!formField['password']) {
			formIsValid = false;
			errors['password'] = 'Cannot be empty';
		}

		setFieldError(errors);
		return formIsValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (handleValidation()) {
			setLoading(true);
			timeOut = setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	};

	return (
		<PageLayout>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				{loading ? (
					<Spinner />
				) : (
					<>
						<ValidationInfo showError={fieldError.username !== ''}>
							<Input
								value={formField.username}
								type='text'
								name='username'
								placeholder='Username'
								onChange={handleInputChange}
							></Input>
							<span>{fieldError.username}</span>
						</ValidationInfo>
						<ValidationInfo showError={fieldError.password !== ''}>
							<PasswordInput
								value={formField.password}
								name='password'
								onChange={handleInputChange}
							></PasswordInput>
							<span>{fieldError.password}</span>
						</ValidationInfo>
					</>
				)}

				<Button large type='submit' disabled={loading}>
					{loading ? 'Loading...' : 'Login'}
				</Button>
				{!loading && (
					<>
						<div className='alt-text'>Or</div>
						<Button secondary type='button'>
							Register
						</Button>
					</>
				)}
			</Form>
		</PageLayout>
	);
};

export default Login;
