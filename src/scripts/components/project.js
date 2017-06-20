import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Project extends Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<div>Individual Project Page</div>
			</div>
		);
	}
}