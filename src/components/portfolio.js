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
		
		let mobile = document.querySelector('.nav-mobile');
		let tablet = document.querySelector('.nav-tablet-dropdown');
		
		mobile.style.display = 'none';
		tablet.style.display = 'none';
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
					<p className="bio-blurb">Dan is a web developer in Austin, TX who loves to build things that are fun, challenging to code, and that he can enjoy using himself once thy're up and running.</p>
				</div>
				<div className="projects-grid">
					{projects}
				</div>
			</div>
		);
	}
}