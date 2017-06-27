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

	checkCount(currentTotal, next) {
		if(currentTotal % 9) {
			currentTotal += 1;
			this.checkCount(currentTotal, next);
		} else {
			next(currentTotal);
		}
	}

	addDummyElements(container) {
		let count = container.length;
		this.checkCount(count, function(finalCount) {
			let dummyElement;
			for (let i = 0; i < (finalCount - count); i++) {
				container.push(<div key="dummy" className="dummy-project project-thumb"></div>);
			}
		});
		return container;
	}

	render() {
		const projects = this.state.projects.map((project, i) => {
			return (
				<ProjectThumb
					key={i}
					id={i}
					name={project.name}
					image={project.image}
					blurb={project.blurb}
					githubLink={project.githubLink}
					liveLink={project.liveLink}
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
					<img src="/src/images/dan.png" />
					<p>Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
				</div>
				<div className="projects-grid">
					{this.addDummyElements(projects)}
				</div>
			</div>
		);
	}
}