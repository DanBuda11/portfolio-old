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

// Build bundle not loading correctly
	// Probably need to make changes to webpack.config.js

// Site screwing up again when try to refresh from any project page
	// Working again but not sure exactly why. All I changed was
	// image loader in webpack.config.js
// Can't load some images again when running in localhost
	// Working again after rejiggering webpack.config.js

// Scroll issues exist when going to project pages
	// Working again after chaning scroll method to 'window'

// Add and SPELLCHECK all content before finishing styling
	// Project blurbs
	// Project tech stacks (& correct spelling in both resume skills and projects)
	// Resume blurbs, Open Austin blurb & title, achievements, interests
	// Resume skills finalized & ordered
	// For webpack framework project, make sure to say it's an onging
		// project

	// Go thru each page and tweak styling along all breakpoints
		// Make sure transitions only on desktop sizes
		// Project page: don't like red padding around tech items
			// Change the appearance of link buttons & make transition
			// only on desktop sizes
		// Create additional mixins & variables if/where useful
		// When styling done, clean up all SCSS files removing unused code
		// Test on all devices (make a surge): phone, ipad,
		// both computers (Chrome & IE),
			// Susie's phone (Safari & Chrome)
		// Add new image for danbuda.com project

// README
	// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf...

// Clean up all files & final push
// Deploy, make repo public & make any changes to the repo & the repo
	// of the previous portfolio version