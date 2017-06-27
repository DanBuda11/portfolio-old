import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Add some of the tech stack between the project image and the title
// Can either hard code the most important tech first (1st 3-4 items show up
// in the tech stack list here) or run some method to pull certain ones out if
// they're in the stack (like if(React) 1st then if(Node), etc.).
	// Hard coding the correct order for the 1st 3-4 techs is probably best

export default class ProjectThumb extends Component {
	render() {
		const tech = this.props.tech.slice(0, 3).map((t, i) => {
			return (
				<div className="project-thumb-tech-item" key={i}>{t}</div>
			);
		});

		return (
			<Link className="project-thumb" to={`/project/${this.props.id}`}>
				<div className="project-thumb-image-div">
					<img src={require(`./../images/${this.props.image}`)} />
				</div>
				<div className="project-thumb-tech-div">
					{tech}
				</div>
				<div className="project-thumb-name-div">
					<p>{this.props.name}</p>
				</div>
			</Link>
		);
	}
}