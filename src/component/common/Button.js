import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const fontSize = ({ large }) => {
	if (large)
		return css`
			font-size: 1.3rem;
			padding: 10px;
			border-radius: 5px;
		`;
	return css`
		font-size: 1rem;
		padding: 8px;
		border-radius: 4px;
	`;
};

const Button = styled.button`
	background: ${(p) =>
		p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
	color: white;
	font-weight: bold;
	${fontSize}
	border: none;
	box-shadow: none;
	width: 100%;
	display: block;
	cursor: pointer;
	&:disabled {
		background: #eee;
		color: #666;
	}
`;

Button.propTypes = {
	secondary: PropTypes.bool,
	large: PropTypes.bool,
};

const Button2 = ({ children }) => {
	return <button>{children}</button>;
};

export { Button, Button2 };
