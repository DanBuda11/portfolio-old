import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from '../containers/portfolio';
import About from './about';
import Project from '../containers/project';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Portfolio} />
			<Route exact path="/about" component={About} />
			<Route path="/project/:id" component={Project} />
		</Switch>
	</div>
);

export default Main;