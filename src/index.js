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

// Make README pretty extensive and don't wait until the end to start writing it

// Before final push to GitHub and final deploy, clean up code really well,
// create as many Sass variables and mixins as possible, clean up Sass to make it
// as small as possible

// Make sure to test CSS breakpoints on all devices, including different computers
// and Susie's phone

// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf in README

// For responsive styling, start working with more
// breakpoints and just make changes as neccesary

// Make sure transitions, transforms, etc aren't working
// on screen sizes you don't want them to
	// eg: don't scale up project thumbs on mobile
	// Need to remove this from tablet size, possible more

// Make sure all pages start at the top when returning
// from another page or going to one
	// I think this is all working now.

// Need to fix footer layout just as it turns from tablet to desktop
	// Mostly done but probably needs a final tweak

// Need to fix project-thumb project title to not go to
// multiple lines at different breakpoints - makes it look
// kinda stupid

// Need new picture for React Navbar that removes the
// whitespace. And an image for danbuda.com once it's ready
// to deploy. Figure out an image for the Webpack framework
	// probably just a screenshot of the webpack.config code
// Add favicon

// Dropdown menu not closing when you navigate to a different page

// Need to put back buttons on resume, about, etc pages

// Is there any way to use browser history? Go back to
// Router v2?