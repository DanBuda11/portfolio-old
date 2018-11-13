import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('entry')
);

// Add any remaining project content; read thru and spellcheck everything on all pages
// Finish styling - start with mobile and work my way out, try to remove excess media queries
// Create favicon package and do the same as I did with TxLege Countdown
// Need og:image meta link to image
// Consistent spelling of tech items in projects, project thumbs, resume
// Cross-device/browser testing (phone/tablet simluators, firefox, safari)
// Add image for this portfolio for its project entry & something "pablo-sized" for the readme
// finalize content of readme.md
// change to this repo for Netlify deploy, make this repo public and make the previous portfolio private

// README
// Credit everything I used: Pablo, TinyPNG, Font Awesome, Webpack, rimraf...
