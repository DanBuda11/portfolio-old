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

	// Add & Spellcheck all content
	// Tweak styling on each page
	// Surge and check on different devices
	// Add image for danbuda.com
	// Complete README
	// Final code cleanup of all files
	// Deploy, make repo public & make any changes to the repo &
		// the repo of the previous portfolio version

	// Add & SPELLCHECK all content:
		// About page
		// resume
			// skills finalized & ordered
			// experience blurbs finalized and check all other info
			// achievements, interests finalized & ordered
		// home page bio
		// All project blurbs
		// All project tech stacks

	// Make README extensive
		// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf...

	// Before final push to GitHub & deploy, clean up code really well:
		// Create additional mixins & Sass variables if warranted
		// Test CSS breakpoints on all devices (make a Surge):
			// my phone, iPad, laptop, PC (Chrome & IE)
			// Susie's phone

	// For final styling tweaks:
		// Look at every page at every breakpoint and just add media queries
			// wherever I need to to fix any minor bugs
		// Go thru each page, including header/footer and see if anything
			// needs to look better
		// Remove transitions/transforms for mobile/tablet screen sizes

	// New image for danbuda.com project once it's ready to deploy

	// Clean up all files