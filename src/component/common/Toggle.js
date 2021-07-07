import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
	width: 50px;
	min-width: 50px;
	height: 25px;
	border-radius: 25px;
	border: 1px solid #666;
	display: flex;
	/* background: black; */
	background-image: linear-gradient(
		to bottom,
		${(p) => p.theme.primaryColor},
		${(p) => p.theme.secondaryColor}
	);
	margin: auto;
`;

const Notch = styled.div`
	width: 21px;
	height: 21px;
	border-radius: 50%;
	border: 1px solid #666;
	margin-top: 1px;
	background: white;
	transition: transform 0.1s linear;
	transform: translate(${(p) => (p.isActive ? '26px' : '1px')});
`;

export const Toggle = ({ isActive, onToggle }) => {
	return (
		<ToggleWrapper onClick={onToggle}>
			<Notch isActive={isActive} />
		</ToggleWrapper>
	);
};
