import React, { useState } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'component/pages/HomePage';
import Login from 'component/pages/Login';
import LightTheme from './themes/light';
import DarkTheme from './themes/dark';

const GlobalStyle = createGlobalStyle`
body{
	background: ${(p) => p.theme.bgColor};
	min-height: 100vh;
	margin:0;
	color: ${(p) => p.theme.fontColor};
	font-family: 'Ubuntu', sans-serif;
}
`;

function App() {
	const [theme, setTheme] = useState(LightTheme);
	return (
		<ThemeProvider
			theme={{
				...theme,
				setTheme: () => {
					console.log('setTheme');
					setTheme((s) => (s.id === LightTheme.id ? DarkTheme : LightTheme));
				},
			}}
		>
			<GlobalStyle />
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/login' component={Login} />
				{/* <Route path='login'>
					<Login />
				</Route> */}
			</Switch>
			{/* <h1>Hello world</h1>
			<Button>primary button</Button>
			<Button secondary>secondary button</Button>
			<Button large>Large button</Button> */}

			{/* <Button2>test</Button2> */}
		</ThemeProvider>
	);
}

export default App;
