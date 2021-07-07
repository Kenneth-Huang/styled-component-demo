import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
	from{
		transform:rotate(0deg);
}
	to{
		transform: rotate(360deg);
	}
`;

export const Spinner = styled.div`
	height: 30px;
	width: 30px;
	border: 1px solid #3399ff;
	border-right: none;
	border-top: none;
	border-radius: 50%;
	margin: 15px auto;
	animation: ${rotation} 1s infinite;
`;
