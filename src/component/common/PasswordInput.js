import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputWrapper = styled.div`
	display: flex;
	~ div {
		margin-bottom: 8px;
	}
`;
const PasswordInputStyled = styled(Input).attrs((p) => ({
	type: p.showPassword ? 'text' : 'password',
	placeholder: 'Password',
}))`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;

const ShowPasswordToggleButton = styled.div`
	height: 40px;
	border: 1px solid #ccc;
	box-sizing: border-box;
	padding: 8px;
	font-size: 0.9rem;
	display: flex;
	border-left: 0;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	background: white;
	font-weight: bold;
	cursor: pointer;
	user-select: none;
	color: black;
`;

export const PasswordInput = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<PasswordInputWrapper>
				<PasswordInputStyled {...props} showPassword={showPassword} />
				<ShowPasswordToggleButton onClick={() => setShowPassword((s) => !s)}>
					{showPassword ? 'Hide' : 'Show'}
				</ShowPasswordToggleButton>
			</PasswordInputWrapper>
		</>
	);
};
