import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import configureStore from './store';

import App from './app';
// import store, { history } from './scripts/store';

// const history = syncHistoryWithStore(Router, store);

const store = configureStore();

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	, document.getElementById('entry')
);


