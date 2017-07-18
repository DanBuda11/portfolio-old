import React, { Component } from 'react';

import { skills, experience, achievements, interests } from '../data/resume-data';

// Break coding skills into front, back, database,
// testing, other or something like that
	// Try to do it within the map function for skills
	// and not have to use multiple maps

	// front end
	// back end
	// database
	// ajax
	// design
	// project bundling
	// other libraries can go in their place (mongoose for back end,
	// axios for ?) or maybe don't go this deep

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills,
			experience,
			achievements,
			interests
		}
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

		const achievements = this.state.achievements.map((achievement, i) => {
			return <li key={i}>{achievement}</li>;
		});

		const interests = this.state.interests.map((interest, i) => {
			return <li key={i}>{interest}</li>;
		});

		return (
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
					<ul className="achievements">
						{achievements}
					</ul>
					<h3 className="resume-title">Interests</h3>
					<ul className="interests">
						{interests}
					</ul>
				
			</div>
		);
	}
}