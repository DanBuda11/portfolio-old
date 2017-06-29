import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/project-data';

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: data[this.props.match.params.id]
		};
	}

	render() {
		return (
			<div className="project-page">
				<Link className="breadcrumb" to="/"><i className="fa fa-2x fa-long-arrow-left"></i></Link>
				<div className="project-name">{this.state.project.name}</div>
				<img className="project-image" src={require(`./../images/${this.state.project.image}`)} />
				<div className="project-blurb">{this.state.project.blurb}</div>
				<a className="project-link" href={this.state.project.githubLink}>Check out the code in GitHub</a>
				{(this.state.project.liveLink) ? <a className="project-link" href={this.state.project.liveLink}>Vist the live project</a> : ''}
			</div>
		);
	}
}