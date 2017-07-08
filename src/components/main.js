import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './portfolio';
import About from './about';
import Project from './project';
import Resume from './resume';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Portfolio} />
			<Route exact path="/about" component={About} />
			<Route exact path="/resume" component={Resume} />
			<Route path="/project/:id" component={Project} />
		</Switch>
	</div>
);

export default Main;