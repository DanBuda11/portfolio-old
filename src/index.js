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

	// Make README extensive
		// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf...

	// Before final push to GitHub & deploy, clean up code really well:
		// Create additional mixins & Sass variables if warranted
		// Clean up SCSS completely
			// Remove stuff from media breakpoints and put inside selectors?
			// Break SCSS into multiple files and import?
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

	// New image for React Navbar that removes the whitespace
	// New image for danbuda.com project once it's ready to deploy
	// Image for Webpack Framework project (code snapshot?)
	// Favicon

	// Add breadcrumbs/back buttons to all pages and redo styling
		// (it doesn't look very good)

	// Dropdown not closing when navigating pages if it was open when
		// clicked to navigate
		// I THINK THIS IS FIXED NOW

	// Problems when manually typing in urls - can't find stuff
	// Also can't load anything other than the home page on browser
	// page refresh
		// I THINK THIS IS FIXED NOW - UPDATED WEBPACK.CONFIG.JS
		// Even when the page reloads after saving changes to the code