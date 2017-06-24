import React, { Component } from 'react';
import Link from 'react-router-dom';

export default class ProjectThumb extends Component {
	render() {
		return (
			<div className="project-thumb">
				<p>{this.props.name}</p>
			</div>
		);
	}
}