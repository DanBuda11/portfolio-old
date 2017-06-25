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
			<div>
				<Link to="/">Home</Link>
				<div>{this.state.project.name}</div>
				<div>{this.state.project.blurb}</div>
				<div>{this.state.project.githubLink}</div>
				<div>{this.state.project.liveLink}</div>
			</div>
		);
	}
}