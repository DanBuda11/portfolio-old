import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="nav">
				<div className="nav-mobile">
					<div className="nav-mobile-1">
						<a href="">Portfolio</a>
						<a href="">About</a>
						<a href="">Resume</a>
					</div>
					<div className="nav-mobile-2">
						<a href="tel:+15126631673">Call</a>
						<a href="mailto:danbuda@gmail.com">Email</a>
					</div>
					<div className="nav-mobile-3">
						<a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-codepen" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-github-square" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="nav-tablet">
					<div className="nav-tablet-1">
						<a href="">Call</a>
						<a href="">Email</a>
					</div>
					<div className="nav-tablet-2">

					</div>
					<div className="nav-tablet-3">
					</div>
				</div>
				<div className="nav-desktop">

				</div>
			</div>
		);
	}
}