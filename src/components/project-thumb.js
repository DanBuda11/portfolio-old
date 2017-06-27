import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectThumb extends Component {
	render() {
		return (
			<Link className="project-thumb" to={`/project/${this.props.id}`}>
				<div className="project-thumb-image-div">
					<img src={require(`./../images/${this.props.image}`)} />
				</div>
				<div className="project-thumb-name-div">
					<p>{this.props.name}</p>
				</div>
			</Link>
		);
	}
}