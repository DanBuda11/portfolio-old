import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './scripts/reducers/index';

import App from './scripts/app';
// import store, { history } from './scripts/store';

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
);

const history = syncHistoryWithStore(Router, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
	, document.getElementById('entry')
);


