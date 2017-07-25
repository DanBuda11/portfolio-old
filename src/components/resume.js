import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { skills, experience } from '../data/resume-data';

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills,
			experience
		}
	}

	componentDidMount() {
		document.body.scrollTop = 0;
		
		let mobile = document.querySelector('.nav-mobile');
		let tablet = document.querySelector('.nav-tablet-dropdown');
		
		mobile.style.display = 'none';
		tablet.style.display = 'none';
	}
	
	render() {
		const skills = this.state.skills.map((skill, i) => {
			return <li key={i}>{skill}</li>;
		});

		const experience = this.state.experience.map((job, i) => {
			return (
				<li key={i}>
					<p className="exp-title">{job.title}</p>
					<p className="exp-company">{job.company}</p>
					<p className="exp-loc-date">{job.location} &middot; {job.dates}</p>
					<p className="exp-blurb">{job.blurb}</p>
				</li>
			);
		});

		return (
			<div className="resume-container">
				<Link className="breadcrumb" to="/"><i className="fa fa-2x fa-long-arrow-left"></i></Link>
				<div className="resume">
						<h3 className="resume-title">Coding Skills</h3>
						<ul className="skills">
							{skills}
						</ul>
						<h3 className="resume-title">Experience</h3>
						<ul className="experience">
							{experience}
						</ul>
					
						<h3 className="resume-title">Education</h3>
						<div className="education">
							<p className="ed-school">University of Michigan</p>
							<p className="ed-loc-date">Ann Arbor, MI &middot; 1997-2001</p>
						</div>
						<h3 className="resume-title">Achievements</h3>
						<p className="achievements">Private real estate investor, Texas Democracy Foundation Next Generation Leaders 2012, City of Austin Impact Fee Committee Member 2010-2011, Scuba certified</p>
						<h3 className="resume-title last">Interests</h3>
						<p className="interests last">Cooking, scuba diving, guitar, piano, soccer, tennis, golf, travel</p>
				</div>
			</div>
		);
	}
}