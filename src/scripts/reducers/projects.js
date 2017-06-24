function projects(state = {}, action) {
	switch(action.type) {
		case 'GET_PROJECTS':
			return {
				...state
			}
		default:
			return state;
	}
}

export default projects;