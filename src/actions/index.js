export function getProjects(projects) {
	return {
		type: 'GET_PROJECTS',
		projects
	};
}

export function getProject(project) {
	return {
		type: 'GET_PROJECT',
		project
	};
}