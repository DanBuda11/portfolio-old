export function getProjects(projects) {
	return {
		type: 'GET_PROJECTS',
		projects
	}
}

export function getProject(id) {
	return {
		type: 'GET_PROJECT',
		id
	}
}