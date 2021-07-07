import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Toggle } from './Toggle';
import DarkTheme from '../themes/dark';

const HeaderWrapper = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	position: fixed;
	top: 0;
	/* background: #eeeeee; */
	background-image: ${(p) =>
		`linear-gradient(to right, ${p.theme.primaryColor}, ${p.theme.secondaryColor})`};
	border-bottom: 3px solid ${(p) => p.theme.primaryColor};
`;

const Menu = styled.nav`
	display: ${(p) => (p.open ? 'block' : 'none')};
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0;
	padding: 8px;
	box-sizing: border-box;
	border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
	background: ${(p) => p.theme.bgColor};

	font-family: 'Open Sans', sans-serif;
	@media only screen and (min-width: 768px) {
		display: flex;
		position: relative;
		width: initial;
		border-bottom: none;
		margin: auto 0 auto auto;
		background: none;
		left: initial;
		top: initial;
	}
`;

const MobileMenuIcon = styled.div`
	margin: auto 0 auto auto;
	width: 25px;
	min-width: 25px;
	padding: 5px;
	> div {
		height: 3px;
		margin: 5px 0;
		width: 100%;
		background: ${(p) => p.theme.fontColor};
	}
	@media only screen and (min-width: 768px) {
		display: none;
	}
`;

const LinkWrapper = ({ isActive, children, ...props }) => {
	return <Link {...props}>{children}</Link>;
};

const StyledLink = styled(LinkWrapper)`
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	box-sizing: border-box;
	text-align: center;
	font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
	color: ${(p) => p.theme.fontColor};
`;

export const Header = () => {
	const { pathname } = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const { id, setTheme } = useContext(ThemeContext);

	return (
		<HeaderWrapper>
			<MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
				<div />
				<div />
				<div />
			</MobileMenuIcon>
			<Menu open={menuOpen}>
				<StyledLink to='/' isActive={pathname === '/'}>
					Home
				</StyledLink>
				<StyledLink to='/login' isActive={pathname === '/login'}>
					Login
				</StyledLink>
				<Toggle isActive={id === DarkTheme.id} onToggle={setTheme} />
			</Menu>
		</HeaderWrapper>
	);
};
