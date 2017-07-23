import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

render(
		<Router>
			<App />
		</Router>
	, document.getElementById('entry')
);

// Notes

	// Spellcheck all content!

	// Make README extensive
		// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf...

	// Before final push to GitHub & deploy, clean up code really well:
		// Create additional mixins & Sass variables if warranted
		// Test CSS breakpoints on all devices (make a Surge):
			// my phone, iPad, laptop, PC
			// Susie's phone

	// For final styling tweaks:
		// Look at every page at every breakpoint and just add media queries
			// wherever I need to to fix any minor bugs
		// Go thru each page, including header/footer and see if anything
			// needs to look better
		// Remove transitions/transforms for mobile/tablet screen sizes

	// Create and add all content wherever it's needed
		// Home page bio, about page, project blurbs, all resume stuff

	// New image for danbuda.com project once it's ready to deploy

	// Redo breadcrumb styling (use mixin mostly)

	// Clean up all files (remove uneccesary comments, add relevant comments)