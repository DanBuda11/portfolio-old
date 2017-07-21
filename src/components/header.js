import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	menuToggle(menu) {
		let el = document.querySelector(menu);
		
		if (el.style.display === 'block') {
			el.style.display = 'none';
		} else {
			el.style.display = 'block';
		}
	}

	render() {
		const github = 'https://github.com/danbuda11';
		const codepen = 'https://codepen.io/danbuda/';
		const linkedin = 'https://www.linkedin.com/in/danbuda/';
		const twitter = 'https://twitter.com/danielbuda';
		return (
			<div className="nav">
				<Link to="/"><img className="nav-img" src="/src/images/dan.png" /></Link>
				<i className="fa fa-bars fa-3x menu-mobile" onClick={() => this.menuToggle('.nav-mobile')}></i>
				<div className="nav-mobile" onClick={() => this.menuToggle('.nav-mobile')}>
					<div className="nav-mobile-1">
						<Link to="/">Portfolio</Link>
						<Link to="/about">About</Link>
						<Link to="/resume">Resume</Link>
					</div>
					<div className="nav-mobile-2">
						<a href="tel:+15126631673">Call</a>
						<a href="mailto:danbuda@gmail.com">Email</a>
					</div>
					<div className="nav-mobile-3">
						<a href={twitter} target="_blank"><i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i></a>
						<a href={codepen} target="_blank"><i className="fa fa-2x fa-codepen" aria-hidden="true"></i></a>
						<a href={linkedin} target="_blank"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
						<a href={github} target="_blank"><i className="fa fa-2x fa-github-square" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="nav-tablet">
					<div className="nav-tablet-1">
						<a href="tel:+15126631673">Call</a>
						<a href="mailto:danbuda@gmail.com">Email</a>
					</div>
					<i className="fa fa-bars fa-3x menu-tablet" onClick={() => this.menuToggle('.nav-tablet-dropdown')}></i>
					<div className="nav-tablet-dropdown" onClick={() => this.menuToggle('.nav-tablet-dropdown')}>
						<div className="nav-tablet-2">
							<Link to="/">Portfolio</Link>
							<Link to="/about">About</Link>
							<Link to="/resume">Resume</Link>
						</div>
						<div className="nav-tablet-3">
							<a href={twitter} target="_blank"><i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i></a>
							<a href={codepen} target="_blank"><i className="fa fa-2x fa-codepen" aria-hidden="true"></i></a>
							<a href={linkedin} target="_blank"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
							<a href={github} target="_blank"><i className="fa fa-2x fa-github-square" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div className="nav-desktop">
					<div className="nav-desktop-1">
						<Link to="/">Portfolio</Link>
						<Link to="/about">About</Link>
						<Link to="/resume">Resume</Link>
					</div>
					<div className="nav-desktop-2">
						<a href="tel:+15126631673">Call</a>
						<a href="mailto:danbuda@gmail.com">Email</a>
					</div>
					<div className="nav-desktop-3">
						<a href={twitter} target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
						<a href={codepen} target="_blank"><i className="fa fa-codepen" aria-hidden="true"></i></a>
						<a href={linkedin} target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						<a href={github} target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		);
	}
}