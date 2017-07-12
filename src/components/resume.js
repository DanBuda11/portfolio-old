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
						<li>Node.js</li>
						<li>Backbone.js</li>
						<li>Webpack</li>
						<li>JavaScript</li>
						<li>CSS/Sass</li>
						<li>HTML</li>
						<li>Git</li>
						<li>jQuery</li>
						<li>Mocha</li>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
						<li>Redux</li>
						<li>Express</li>
					</ul>
					<h3>Experience</h3>
					<ul className="experience">
						<li>
							<p className="exp-title">Realtor</p>
							<p className="exp-company">Joe Stewart Realtors</p>
							<p className="exp-location">Austin, TX</p>
							<p className="exp-date">2015-Present</p>
							<p className="exp-blurb">I sell houses like a mother fucking baller.</p>
						</li>
						<li>
							<p>Candidate</p>
							<p>Austin City Council District 5</p>
						</li>
						<li>
							<p>Chief of Staff</p>
							<p>Office of Senator Wendy Davis</p>
						</li>
							<p>Committee Director</p>
							<p>Office of Senator Mario Gallegos</p>
						<li>
							<p>Financial Advisor</p>
							<p>Prudential Financial</p>
						</li>
						<li>
							<p>Marketing & Web Design Intern</p>
							<p>Shanghai GoFly Group</p>
						</li>
						<li>
						</li>
					</ul>
				</div>
				<div className="resume-right">
					<h3>Education</h3>
					<div className="education">
						<p className="ed-school">University of Michigan</p>
						<p className="ed-location">Ann Arbor, MI</p>
						<p className="ed-date">1997-2001</p>
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

// should I make the mobile version expandable?
	// probably
	// so make each section have a container or similar with
	// a dropdown-ish click box/button that is only visible in
	// the mobile version