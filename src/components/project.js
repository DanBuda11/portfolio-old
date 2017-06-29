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
				<Link className="breadcrumb" to="/"><i className="fa fa-long-arrow-left"></i>Back</Link>
				<div className="project-name">{this.state.project.name}</div>
				<img className="project-image" src={require(`./../images/${this.state.project.image}`)} />
				<div className="project-blurb">{this.state.project.blurb}</div>
				<div className="project-link">{this.state.project.githubLink}</div>
				<div className="project-link">{this.state.project.liveLink}</div>
			</div>
		);
	}
}