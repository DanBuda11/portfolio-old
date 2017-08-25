import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { skills, experience } from '../data/resume-data';

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills,
			experience
		};
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
			return (
				<li key={i}>
					{skill}
				</li>
			);
		});

		const experience = this.state.experience.map((job, i) => {
			return (
				<li key={i}>
					<p className="exp-title">
						{job.title}
					</p>
					<p className="exp-company">
						{job.company}
					</p>
					<p className="exp-loc-date">
						{job.location} &middot; {job.dates}
					</p>
					<p className="exp-blurb">
						{job.blurb}
					</p>
				</li>
			);
		});

		return (
			<div className="resume-container">
				<Link className="breadcrumb" to="/">
					<i className="fa fa-2x fa-long-arrow-left" />
				</Link>
				<div className="resume">
					<h3 className="resume-title">Coding Skills</h3>
					<ul className="skills">
						{skills}
					</ul>
					<h3 className="resume-title">Open Source Contributions</h3>
					<div className="open-source">
						<p className="open-source-name">Open Austin Budget Party</p>
						<p className="open-source-blurb">
							Open source project to help Austin citizens understand the city's
							budget-making process.
						</p>
						<a
							className="open-source-link"
							href="https://github.com/open-austin/budgetparty"
						>
							Link
						</a>
					</div>
					<h3 className="resume-title">Experience</h3>
					<ul className="experience">
						{experience}
					</ul>

					<h3 className="resume-title">Education</h3>
					<div className="education">
						<p className="ed-school">University of Michigan</p>
						<p className="ed-degree">B.A. in Economics, German Minor</p>
						<p className="ed-loc">Ann Arbor, MI</p>
					</div>
					<h3 className="resume-title">Achievements</h3>
					<p className="achievements">
						Private real estate investor, Texas Democracy Foundation Next
						Generation Leaders 2012, City of Austin Impact Fee Committee Member
						2010-2011, Scuba certified, CPR certified, youth soccer coach
					</p>
					<h3 className="resume-title last">Interests</h3>
					<p className="interests last">
						Cooking, scuba diving, guitar, piano, soccer, tennis, golf, travel
					</p>
				</div>
			</div>
		);
	}
}
