import React, { Component } from 'react';
import data from '../data/project-data';
import ProjectThumb from './project-thumb';

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: data
		}
	}

	componentDidMount() {
		document.body.scrollTop = 0;
	}
	
	render() {
		const projects = this.state.projects.map((project, i) => {
			return (
				<ProjectThumb
					key={i}
					id={i}
					name={project.name}
					image={project.image}
					tech={project.tech}
				/>
			);
		});

		return (
			<div className="portfolio">
				<div className="portfolio-title">
					<h2>Dan Buda</h2>
					<h3>Web Developer</h3>
				</div>
				<div className="portfolio-bio">
					<img className="bio-pic" src="/src/images/dan.png" />
					<p className="bio-blurb">Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
				</div>
				<div className="projects-grid">
					{projects}
				</div>
			</div>
		);
	}
}