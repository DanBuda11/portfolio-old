import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './portfolio';
import About from './about';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Portfolio} />
			<Route exact path="/about" component={About} />
		</Switch>
	</div>
);

export default Main;