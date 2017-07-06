import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './app';

render(
		<Router>
			<App />
		</Router>
	, document.getElementById('entry')
);


	// Credit Pablo with link in README

// Make README pretty extensive and don't wait until the end to start writing it

// Before final push to GitHub and final deploy, clean up code really well,
// create as many Sass variables and mixins as possible, clean up Sass to make it
// as small as possible

// Make sure to test CSS breakpoints on all devices, including different computers
// and Susie's phone

// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf in README

// Create testing and make tests, make sure to include in .gitignore


// For responsive styling, start working with more
// breakpoints and just make changes as neccesary

// Make sure transitions, transforms, etc aren't working
// on screen sizes you don't want them to
	// eg: don't scale up project thumbs on mobile

// Make sure page starts at top when go to another page.
// Currently when clicking on a project thumb, the project page
// doesn't start at the top.

// Need to fix footer layout just as it turns from tablet to desktop