/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Results from '../components/Results';

function App() {
  return (
	<>
		<Router>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge" />
				</Route>
			</Switch>
			<Results />
		</Router>

	</>
  );
}

export default App;
