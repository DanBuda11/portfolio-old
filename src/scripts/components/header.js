import React, { Component } from 'react';

export default class Header extends Component {
	mobileToggle() {
		let menu = document.querySelector('.nav-mobile');
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		} else {
			menu.style.display = 'block';
		}
	}

	tabletToggle() {
		let menu = document.querySelector('.nav-tablet-dropdown');
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		} else {
			menu.style.display = 'block';
		}
	}

	render() {
		return (
			<div className="nav">
				<i className="fa fa-bars menu-mobile" onClick={this.mobileToggle}></i>
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
					<i className="fa fa-bars menu-tablet" onClick={this.tabletToggle}></i>
					<div className="nav-tablet-dropdown">
						<div className="nav-tablet-2">
							<a href="">Portfolio</a>
							<a href="">About</a>
							<a href="">Resume</a>
						</div>
						<div className="nav-tablet-3">
							<a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
							<a href=""><i className="fa fa-codepen" aria-hidden="true"></i></a>
							<a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
							<a href=""><i className="fa fa-github-square" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div className="nav-desktop">
					<div className="nav-desktop-1">
						<a href="">Portfolio</a>
						<a href="">About</a>
						<a href="">Resume</a>
					</div>
					<div className="nav-desktop-2">
						<a href="">Call</a>
						<a href="">Email</a>
					</div>
					<div className="nav-desktop-3">
						<a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-codepen" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-github-square" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		);
	}
}