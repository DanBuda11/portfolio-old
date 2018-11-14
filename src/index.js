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

// Deploy: rename this github folder portfolio and make it public, make sure it deploys correcly to Netlify, check favicons once it's deployed, accessibility audits once deployed (axe should be good to go)
