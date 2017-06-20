import React, { Component } from 'react';

import ProjectThumb from './project-thumb';
import Data from '../../data/project-data';

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: Data
		};
	}

	render() {
		const projects = this.state.projects.map((project, i) => {
			return (
				<ProjectThumb
					key={i}
					id={i}
					name={project.name} />
			);
		});

		return (
			<div className="portfolio">
				<div>Photo w/name & title</div>
				<div>portfolio items</div>
				{projects}
			</div>
		);
	}
}