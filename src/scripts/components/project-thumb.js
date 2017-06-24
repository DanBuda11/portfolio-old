import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectThumb extends Component {
	render() {
		return (
			<Link className="project-thumb" to={`/project/${this.props.id}`}>
				<p>{this.props.name}</p>
			</Link>
		);
	}
}