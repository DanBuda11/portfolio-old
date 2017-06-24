import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { HashRouter as Router } from 'react-router-dom';

import rootReducer from './reducers/index';

import projects from '../data/project-data';

const defaultState = {
	projects
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(Router, store);

export default store;