import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectThumb extends Component {
	render() {
		return (
			<Link to={`/project/${this.props.id}`}>
				<div>{this.props.name}</div>
			</Link>
		);
	}
}