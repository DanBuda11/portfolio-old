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

// Disable CSS transitions on all smaller screens (@media (hover: hover)), spell check everything, check styling mobile to desktop, remove any dead CSS, cross device/browser testing

// Deploy: rename github folder for previous portfolio and make it private, rename this github folder portfolio and make it public, make sure it deploys correcly to Netlify, check favicons once it's deployed, accessibility audits once deployed (axe should be good to go)
