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
					name={project.name}
					img={project.image}
					blurb={project.blurb}
					githubLink={project.githubLink}
					liveLink={project.liveLink}
					tech={project.tech} />
			);
		});

		return (
			<div className="portfolio">
				<div className="portfolio-title">
					<h2>Dan Buda</h2>
					<h3>Web Developer</h3>
				</div>
				<div className="portfolio-bio">
					<img src="/src/images/dan.png" />
					<p>Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
				</div>
				{projects}
			</div>
		);
	}
}