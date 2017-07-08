import React, { Component } from 'react';


// Make a component for experience then import and map
// over and put them all here

export default class Resume extends Component {
	render() {
		return (
			<div className="resume">
				<div className="resume-left">
					<h3>Coding Skills</h3>
					<ul className="skills">
						<li>React</li>
						<li>NodeJS</li>
						<li>Backbone</li>
						<li>Webpack</li>
					</ul>
					<h3>Experience</h3>
					<ul className="experience">
						<li>
							<p>Realtor</p>
							<p>Joe Stewart Realtors</p>
						</li>
						<li>
							<p>Chief of Staff</p>
							<p>Senator Wendy Davis</p>
						</li>
					</ul>
				</div>
				<div className="resume-right">
					<h3>Education</h3>
					<div className="education">
						<p>University of Michigan</p>
					</div>
					<h3>Achievements</h3>
					<ul className="achievements">
						<li>Pooped off the Sears Tower</li>
						<li>Cured cancer then forgot about it</li>
					</ul>
					<h3>Interests</h3>
					<ul className="interests">
						<li>Cooking</li>
						<li>Scuba Diving</li>
					</ul>
				</div>
			</div>
		);
	}
}

// How to divide up the page?

// Only make an expandable section for mobile if it's a long secton?
	// like basically just experience

// For desktop size, make 2 columns with education, achievements,
// interests in the right column

// Need:

	// work experience
	// coding skills
	// achievements/affiliations
	// interests
	// education

// should I make the mobile version expandable?
	// probably
	// so make each section have a container or similar with
	// a dropdown-ish click box/button that is only visible in
	// the mobile version