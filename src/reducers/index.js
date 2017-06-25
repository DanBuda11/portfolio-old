import { combineReducers } from 'redux';
import { getProjects, getProject } from './projects';
// import { routerReducer } from 'react-router-redux';

export default combineReducers({
	getProjects,
	getProject
});