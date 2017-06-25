// export default function(state=[], action) {

// 	switch (action.type) {
// 		case GET_PROJECTS:
// 			return action.payload;

// 		case GET_PROJECT:
// 			return action.payload

// 		default:
// 			return state;
// 	}


// function projects(state = [], action) {
// 	switch(action.type) {
// 		case GET_PROJECTS:
// 			return action.projects;

// 		default:
// 			return state;
// 	}
// }

// export default projects;

import data from '../data/project-data';

const initialState = {
	projects: data
}

export function getProjects(state = initialState, action) {
	// switch (action.type) {
	// 	case 'GET_PROJECTS':
	// 		return ['hello'];

	// 	default:
			return state;
	}


export function getProject(state = {}, action) {
	switch (action.type) {
		case 'GET_PROJECT':
			return action.project;

		default:
			return state;
	}
}